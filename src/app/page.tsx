
'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReturn } from 'react-hook-form'; // Import UseFormReturn
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Syringe } from '@/components/syringe'; // Import Syringe component
import { PeptideList } from '@/components/peptide-list'; // Import PeptideList component
import { Scale, SyringeIcon, Beaker, Droplets } from 'lucide-react'; // Removed Weight icon
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'; // Import Select components
// Removed AuthControls import as it will be placed within PeptideList

// Define Zod schema for form validation
const formSchema = z.object({
  vialSize: z.coerce.number().min(0.001, { message: 'Must be positive' }), // Always in mg
  diluentAmount: z.coerce.number().min(0.1, { message: 'Must be positive' }), // Always in ml
  desiredDose: z.coerce.number().min(0.001, { message: 'Must be positive' }),
  doseUnit: z.enum(['mg', 'mcg'], { required_error: 'Please select a unit' }), // Unit for desired dose only
});

export type FormData = z.infer<typeof formSchema>;

const Home: NextPage = () => {
  const [unitsToDraw, setUnitsToDraw] = useState<number | null>(null);
  const [dosesPerVial, setDosesPerVial] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vialSize: undefined,
      diluentAmount: undefined,
      desiredDose: undefined,
      doseUnit: 'mcg', // Default dose unit to mcg
    },
  });

  // Watch the dose unit field to update labels/placeholders dynamically
  const selectedDoseUnit = form.watch('doseUnit');

  function onSubmit(values: FormData) {
    const { vialSize, diluentAmount, desiredDose, doseUnit } = values;

    // Convert desired dose to mg if necessary
    const desiredDoseInMg = doseUnit === 'mcg' ? desiredDose / 1000 : desiredDose;

    // Calculation Logic (always using mg for consistency)
    if (vialSize <= 0 || diluentAmount <= 0 || desiredDoseInMg <= 0) {
        // Handle invalid inputs gracefully, maybe show a message
        setUnitsToDraw(null);
        setDosesPerVial(null);
        setShowResults(false); // Or show an error state
        console.error("Invalid input values for calculation.");
        return;
    }

    const mgPerML = vialSize / diluentAmount; // Concentration in mg/mL
    const mlDose = desiredDoseInMg / mgPerML; // Volume of dose in mL
    const units = mlDose * 100; // Units on a U-100 syringe (1 mL = 100 units)
    const dosesAvailable = Math.floor(vialSize / desiredDoseInMg); // Number of full doses

    setUnitsToDraw(units); // Store potentially fractional units
    setDosesPerVial(dosesAvailable);

    setShowResults(true); // Show results section with animation
  }

  return (
    // Removed relative positioning
    <div className="content-area flex flex-col h-full">
      {/* Removed AuthControls from here */}

      {/* Removed padding-top */}
      <header className="text-center mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Peptide Calculator
        </h1>
        <p className="text-muted-foreground">Your friendly peptide calculator</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 flex-grow min-h-0">
        {/* Left Side: Calculator & Results */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Scale className="text-primary" /> Calculator
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="vialSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          <Beaker size={16} /> Vial Strength (mg)
                        </FormLabel>
                        <FormControl>
                          {/* Vial strength always in mg */}
                          <Input type="number" step="0.1" placeholder="e.g., 10" {...field} value={field.value ?? ''} onChange={(e) => field.onChange(e.target.valueAsNumber)} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="diluentAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1"><Droplets size={16} /> Diluent Amount (ml)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.1" placeholder="e.g., 2" {...field} value={field.value ?? ''} onChange={(e) => field.onChange(e.target.valueAsNumber)} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   {/* Combined Desired Dose Input and Unit Selector */}
                  <div className="flex flex-col space-y-2">
                     <FormLabel className="flex items-center gap-1">
                        <SyringeIcon size={16} /> Desired Dose
                      </FormLabel>
                     <div className="flex gap-2">
                         <FormField
                            control={form.control}
                            name="desiredDose"
                            render={({ field }) => (
                              <FormItem className="flex-grow">
                                <FormControl>
                                   {/* Placeholder updates based on selectedDoseUnit */}
                                  <Input
                                    type="number"
                                    step={selectedDoseUnit === 'mg' ? '0.01' : '1'}
                                    placeholder={`e.g., ${selectedDoseUnit === 'mg' ? '0.25' : '250'}`}
                                    {...field}
                                    value={field.value ?? ''}
                                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                         <FormField
                           control={form.control}
                           name="doseUnit"
                           render={({ field }) => (
                             <FormItem className="w-[100px]">
                               <Select onValueChange={field.onChange} defaultValue={field.value}>
                                 <FormControl>
                                   <SelectTrigger>
                                     <SelectValue placeholder="Unit" />
                                   </SelectTrigger>
                                 </FormControl>
                                 <SelectContent>
                                   <SelectItem value="mcg">mcg</SelectItem>
                                   <SelectItem value="mg">mg</SelectItem>
                                 </SelectContent>
                               </Select>
                               <FormMessage />
                             </FormItem>
                           )}
                         />
                     </div>
                  </div>

                  <Button type="submit" className="w-full btn-glow">
                    Calculate
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {showResults && (unitsToDraw !== null || dosesPerVial !== null) && (
            <Card className="result-animate">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <SyringeIcon className="text-primary" /> Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                {unitsToDraw !== null && !isNaN(unitsToDraw) && ( // Added isNaN check
                  <div>
                    <p className="text-muted-foreground text-sm">
                      Inject: <span className="text-2xl font-bold text-primary">{Math.round(unitsToDraw)}</span> units on a 100-unit syringe.
                    </p>
                  </div>
                )}
                 {unitsToDraw !== null && !isNaN(unitsToDraw) && dosesPerVial !== null && <Separator />}
                {dosesPerVial !== null && !isNaN(dosesPerVial) && ( // Added isNaN check
                  <div>
                    <p className="text-muted-foreground text-sm">
                      Doses Available: <span className="text-2xl font-bold text-primary">{dosesPerVial}</span> full doses per vial.
                    </p>
                  </div>
                )}
                 {unitsToDraw !== null && !isNaN(unitsToDraw) && ( // Added isNaN check
                   <div className="mt-4">
                     <Syringe units={unitsToDraw} />
                   </div>
                 )}
                 {(unitsToDraw === null || isNaN(unitsToDraw)) && (dosesPerVial === null || isNaN(dosesPerVial)) && (
                    <p className="text-muted-foreground text-sm italic">
                        Please enter valid inputs above to see results.
                    </p>
                 )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Side: Peptide Info - Pass the form object */}
        <div className="lg:w-2/3 flex flex-col">
          <PeptideList form={form} />
        </div>
      </div>
    </div>
  );
};

export default Home;
