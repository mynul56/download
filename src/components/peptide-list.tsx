
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  // SelectGroup, // Removed SelectGroup
  // SelectLabel, // Removed SelectLabel
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { List, Info, FlaskConical, Clock, Target, CalendarDays, AlertCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { UseFormReturn } from 'react-hook-form';
import type { FormData } from '@/app/page';
import { PeptideData, getAllPeptideNames, getPeptideDataByName } from '@/lib/peptide-data';
// Removed AuthControls, useAuth, useSubscription, Button, AlertDialog imports

// Interface for displayed peptide data
interface PeptideDisplayInfo extends Partial<PeptideData> {
  name: string;
  isLoading: boolean;
  error?: string | null;
}

// Helper function to parse dosage string
const parseDosage = (dosageString: string | undefined): { value: number | null; unit: 'mcg' | 'mg' | null } => {
    if (!dosageString || typeof dosageString !== 'string') return { value: null, unit: null };

    const normalized = dosageString
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/,/g, '')
      .split('-')[0]; // Take the first part if it's a range like "1-2 mg"

    const match = normalized.match(/^([\d.]+).*(mcg|mg)/);

    if (match && match[1] && match[2]) {
      const value = parseFloat(match[1]);
      const unit = match[2] as 'mcg' | 'mg';
      return { value: isNaN(value) ? null : value, unit };
    }

    const numberMatch = normalized.match(/^([\d.]+)/);
    if (numberMatch && numberMatch[1]) {
       const value = parseFloat(numberMatch[1]);
       const likelyUnit = value > 10 ? 'mcg' : 'mg'; // Simple heuristic
       return { value: isNaN(value) ? null : value, unit: likelyUnit };
    }

    return { value: null, unit: null };
};


interface PeptideListProps {
  form: UseFormReturn<FormData>;
}

export const PeptideList: React.FC<PeptideListProps> = ({ form }) => {
  const [selectedPeptideInfo, setSelectedPeptideInfo] = useState<PeptideDisplayInfo | null>(null);
  const [allPeptideNames, setAllPeptideNames] = useState<string[]>([]);
  const [isLoadingPeptideList, setIsLoadingPeptideList] = useState(true);
  // Removed user, subscription, and dialog states

  // Load peptide names on mount
  useEffect(() => {
    setAllPeptideNames(getAllPeptideNames()); // Use simplified getAllPeptideNames
    setIsLoadingPeptideList(false);
  }, []);

  const handlePeptideChange = useCallback((peptideName: string) => {
    if (!peptideName) {
      setSelectedPeptideInfo(null);
      form.resetField("desiredDose");
      form.resetField("doseUnit");
      return;
    }

    // No subscription check, directly fetch and display data
    const peptideData = getPeptideDataByName(peptideName);

    if (peptideData) {
        setSelectedPeptideInfo({
          ...peptideData,
          isLoading: false,
          error: null,
        });

        const parsed = parseDosage(peptideData.recommendedDosage);
        if (parsed.value !== null && parsed.unit !== null) {
          form.setValue('desiredDose', parsed.value, { shouldValidate: true });
          form.setValue('doseUnit', parsed.unit, { shouldValidate: true });
        } else {
           form.resetField("desiredDose");
           form.resetField("doseUnit");
           console.warn(`Could not parse dosage for ${peptideName}: "${peptideData.recommendedDosage}"`);
        }
    } else {
      console.error(`Data not found for ${peptideName}`);
      setSelectedPeptideInfo({
        name: peptideName,
        isLoading: false,
        error: 'Peptide information not found.',
      });
       form.resetField("desiredDose");
       form.resetField("doseUnit");
    }
  }, [form]);


  return (
    <Card className="flex flex-col flex-grow h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-xl flex items-center gap-2">
          <List className="text-primary" /> Peptide Information
        </CardTitle>
        {/* AuthControls removed */}
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-grow overflow-auto p-4 md:p-6 pt-0">
        <label htmlFor="peptide-select" className="text-sm font-medium text-foreground flex items-center gap-1">
          <FlaskConical size={16} /> Select a Peptide
        </label>
        <Select onValueChange={handlePeptideChange} disabled={isLoadingPeptideList} value={selectedPeptideInfo?.name ?? ''}>
          <SelectTrigger id="peptide-select" className="w-full">
            <SelectValue placeholder="Select a peptide..." />
          </SelectTrigger>
          <SelectContent>
            {isLoadingPeptideList ? (
                <SelectItem value="loading" disabled>Loading peptides...</SelectItem>
            ) : (
                allPeptideNames.map((name) => ( // Display all peptides in a single list
                  <SelectItem key={name} value={name}>
                      {name}
                  </SelectItem>
                ))
            )}
          </SelectContent>
        </Select>

        {/* "Unlock Full List" Button and AlertDialog removed */}

        {/* Display Area for Peptide Info */}
        {selectedPeptideInfo ? (
          <Card className="mt-4 flex-grow flex flex-col result-animate bg-secondary/50">
             <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                 <Info size={18} className="text-primary"/>
                 {selectedPeptideInfo.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 flex-grow">
              {selectedPeptideInfo.isLoading ? (
                <div className="space-y-3">
                   <Skeleton className="h-4 w-3/4" />
                   <Skeleton className="h-4 w-1/2" />
                   <Skeleton className="h-4 w-2/3" />
                   <Skeleton className="h-4 w-1/2" />
                </div>
              ) : selectedPeptideInfo.error ? (
                <p className="text-destructive italic flex items-center gap-1">
                   <AlertCircle size={16} /> {selectedPeptideInfo.error}
                 </p>
              ) : (
                <>
                  <div>
                     <Badge variant="secondary" className="mr-1.5 text-xs flex items-center w-fit mb-1">
                      <Target size={12} className="mr-1"/> Purpose:
                     </Badge>
                    <p className="inline text-muted-foreground ml-1">{selectedPeptideInfo.purpose || <span className="italic">N/A</span>}</p>
                  </div>
                  <div>
                    <Badge variant="outline" className="mr-1.5 text-xs flex items-center w-fit mb-1 whitespace-nowrap">
                      <FlaskConical size={12} className="mr-1"/> Dosage:
                    </Badge>
                     <p className="inline text-muted-foreground ml-1">{selectedPeptideInfo.recommendedDosage || <span className="italic">N/A</span>}</p>
                  </div>
                  <div>
                     <Badge variant="secondary" className="mr-1.5 text-xs flex items-center w-fit mb-1 whitespace-nowrap">
                        <Clock size={12} className="mr-1"/> Frequency:
                      </Badge>
                     <p className="inline text-muted-foreground ml-1">{selectedPeptideInfo.frequency || <span className="italic">N/A</span>}</p>
                  </div>
                  <div>
                     <Badge variant="outline" className="mr-1.5 text-xs flex items-center w-fit mb-1 whitespace-nowrap">
                        <CalendarDays size={12} className="mr-1"/> Typical Cycle:
                      </Badge>
                     <p className="inline text-muted-foreground ml-1">{selectedPeptideInfo.cycleDuration || <span className="italic">N/A</span>}</p>
                  </div>
                  <p className="text-xs text-muted-foreground/70 pt-2 italic">
                    Note: Information provided is for general knowledge. Always consult a healthcare professional. Dosages and cycles vary. The common dosage has been pre-filled in the calculator.
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        ) : (
             !isLoadingPeptideList && !selectedPeptideInfo && (
                <div className="flex-grow flex items-center justify-center text-muted-foreground text-center p-4">
                    Select a peptide to view details and auto-fill common dosage.
                </div>
            )
        )}
        {isLoadingPeptideList && !selectedPeptideInfo && (
             <div className="flex-grow flex items-center justify-center text-muted-foreground text-center p-4">
                Loading peptide data...
            </div>
        )}
      </CardContent>
    </Card>
  );
};
