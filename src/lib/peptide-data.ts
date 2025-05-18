
/**
 * @fileOverview Defines the structure and hardcoded data for peptide information.
 */

export interface PeptideData {
  name: string;
  purpose: string;
  recommendedDosage: string; // Includes value and unit, e.g., "250 mcg" or "1-2 mg"
  frequency: string;
  cycleDuration: string;
}

// Hardcoded data for peptides based on common knowledge.
// NOTE: This information is illustrative and for general knowledge. Always consult a healthcare professional.
const fullPeptideDatabase: PeptideData[] = [
  {
    name: 'Ipamorelin',
    purpose: 'Growth Hormone Release, Anti-Aging, Recovery',
    recommendedDosage: '200-300 mcg',
    frequency: '1-3 times daily (often pre-bed)',
    cycleDuration: '8-12 weeks on, 4 weeks off',
  },
  {
    name: 'Tesamorelin',
    purpose: 'Visceral Fat Reduction (esp. HIV lipodystrophy), GH Release',
    recommendedDosage: '1-2 mg',
    frequency: 'Daily (often pre-bed)',
    cycleDuration: '12-26 weeks, consult provider',
  },
  {
    name: 'AOD-9604',
    purpose: 'Fat Loss, Lipolysis',
    recommendedDosage: '300-500 mcg',
    frequency: 'Daily (often fasted morning)',
    cycleDuration: '8-12 weeks',
  },
  {
    name: 'Semaglutide',
    purpose: 'Weight Loss, Type 2 Diabetes Management',
    recommendedDosage: '0.25-2.4 mg (titrated)',
    frequency: 'Once weekly',
    cycleDuration: 'Long-term / Ongoing (consult provider)',
  },
  {
    name: 'Tirzepatide',
    purpose: 'Weight Loss, Type 2 Diabetes Management',
    recommendedDosage: '2.5-15 mg (titrated)',
    frequency: 'Once weekly',
    cycleDuration: 'Long-term / Ongoing (consult provider)',
  },
  {
    name: 'Retatrutide',
    purpose: 'Weight Loss (Clinical Trials), Glucose Control',
    recommendedDosage: 'Variable (under investigation)',
    frequency: 'Once weekly (likely)',
    cycleDuration: 'Under investigation',
  },
  {
    name: 'MOTS-C',
    purpose: 'Metabolic Health, Mitochondrial Function, Exercise Performance',
    recommendedDosage: '5-10 mg',
    frequency: '2-3 times weekly',
    cycleDuration: '4-8 weeks',
  },
  {
    name: 'Ipamorelin/CJC-1295 No DAC',
    purpose: 'Synergistic GH Release, Recovery, Anti-Aging',
    recommendedDosage: '100 mcg CJC / 200 mcg Ipa (example)',
    frequency: '1-3 times daily (often pre-bed)',
    cycleDuration: '8-12 weeks on, 4 weeks off',
  },
  {
    name: 'CJC-1295 No DAC',
    purpose: 'Growth Hormone Release (pulsatile)',
    recommendedDosage: '100-150 mcg',
    frequency: '1-3 times daily',
    cycleDuration: '8-12 weeks on, 4 weeks off',
  },
  {
    name: 'Epitalon',
    purpose: 'Anti-Aging, Telomere Support, Sleep Regulation',
    recommendedDosage: '5-10 mg',
    frequency: 'Daily (short cycle)',
    cycleDuration: '10-20 days, repeat 1-2 times per year',
  },
  {
    name: 'Thymalin',
    purpose: 'Immune System Modulation, Thymus Support',
    recommendedDosage: '10 mg',
    frequency: 'Daily (short cycle)',
    cycleDuration: '10 days, repeat as needed',
  },
   {
    name: 'Melanotan I',
    purpose: 'Tanning (UV protection focus)',
    recommendedDosage: '0.5-1 mg',
    frequency: 'Daily or every other day (loading phase)',
    cycleDuration: 'Until desired tan, then maintenance',
  },
  {
    name: 'GHK-CU',
    purpose: 'Skin Repair, Wound Healing, Anti-Aging (Topical/Injectable)',
    recommendedDosage: '1-2 mg (Injectable), Variable (Topical)',
    frequency: 'Daily',
    cycleDuration: '4-8 weeks (Injectable)',
  },
  {
    name: 'Thymosin-Alpha 1',
    purpose: 'Immune Modulation, Chronic Infections',
    recommendedDosage: '0.75-1.5 mg',
    frequency: '2-3 times weekly',
    cycleDuration: 'Variable, consult provider',
  },
  {
    name: 'LL-37',
    purpose: 'Antimicrobial, Anti-inflammatory, Wound Healing',
    recommendedDosage: 'Variable, often localized or specific protocols',
    frequency: 'Variable',
    cycleDuration: 'Variable, consult provider',
  },
  {
    name: 'BPC-157',
    purpose: 'Tissue Healing (Gut, Tendons, Ligaments), Anti-inflammatory',
    recommendedDosage: '250-500 mcg',
    frequency: '1-2 times daily',
    cycleDuration: '4-8 weeks',
  },
  {
    name: 'TB-500',
    purpose: 'Wound Healing, Recovery, Flexibility, Anti-inflammatory',
    recommendedDosage: '2-5 mg',
    frequency: '2-3 times weekly',
    cycleDuration: '4-8 weeks',
  },
  {
    name: 'PT-141',
    purpose: 'Libido Enhancement (Sexual Dysfunction)',
    recommendedDosage: '0.5-2 mg (as needed)',
    frequency: 'As needed, prior to activity',
    cycleDuration: 'As needed',
  },
  {
    name: 'Oxytocin',
    purpose: 'Social Bonding, Mood, Anxiety Reduction',
    recommendedDosage: 'Variable (often intranasal IU)',
    frequency: 'Daily or as needed',
    cycleDuration: 'Variable',
  },
  {
    name: 'SS-31',
    purpose: 'Mitochondrial Function, Anti-Aging, Organ Protection',
    recommendedDosage: 'Variable (under investigation)',
    frequency: 'Daily (likely)',
    cycleDuration: 'Under investigation',
  },
  {
    name: 'IGF-1 LR3',
    purpose: 'Muscle Growth, Recovery (Advanced Use)',
    recommendedDosage: '20-50 mcg',
    frequency: 'Daily or Post-Workout',
    cycleDuration: '4-6 weeks (use with caution)',
  },
  {
    name: 'DSIP',
    purpose: 'Sleep Improvement, Stress Reduction',
    recommendedDosage: '50-100 mcg',
    frequency: 'Pre-bedtime',
    cycleDuration: 'As needed or short cycles (1-2 weeks)',
  },
  {
    name: 'Kisspeptin',
    purpose: 'Hormone Regulation (GnRH stimulation), Libido',
    recommendedDosage: 'Variable, research context mostly',
    frequency: 'Variable',
    cycleDuration: 'Variable, consult specialist',
  },
  {
    name: 'VIP',
    purpose: 'Anti-inflammatory (CIRS), Gut Health, Immune Regulation',
    recommendedDosage: 'Variable (often intranasal mcg)',
    frequency: 'Multiple times daily (intranasal)',
    cycleDuration: 'Variable, provider-guided',
  },
  {
    name: 'KPV',
    purpose: 'Anti-inflammatory (Skin, Gut)',
    recommendedDosage: '200-500 mcg',
    frequency: '1-2 times daily',
    cycleDuration: '4-8 weeks',
  },
  {
    name: 'NAD+',
    purpose: 'Cellular Energy, DNA Repair, Anti-Aging',
    recommendedDosage: 'Variable (Oral, IV, SubQ - mg)',
    frequency: 'Daily (Oral/SubQ) or Periodic (IV)',
    cycleDuration: 'Ongoing or periodic cycles',
  },
  {
    name: 'Semax OR NA Semax Amidate',
    purpose: 'Cognitive Enhancement, Neuroprotection, Mood',
    recommendedDosage: '200-600 mcg (intranasal)',
    frequency: '1-2 times daily',
    cycleDuration: '2-4 weeks on, 1-2 weeks off',
  },
  {
    name: 'Selank or NA Selank Amidate',
    purpose: 'Anxiety Reduction, Mood Improvement, Cognitive Support',
    recommendedDosage: '250-750 mcg (intranasal)',
    frequency: '1-2 times daily',
    cycleDuration: '2-4 weeks on, 1-2 weeks off',
  },
  {
    name: 'BPC-157/TB-500',
    purpose: 'Synergistic Healing and Recovery',
    recommendedDosage: 'Combined dose (e.g., 250mcg BPC/2mg TB)',
    frequency: 'Daily (BPC component) or 2-3x/wk (TB component)',
    cycleDuration: '4-8 weeks',
  },
  {
    name: 'ARA-290',
    purpose: 'Neuropathic Pain, Anti-inflammatory, Tissue Repair',
    recommendedDosage: '2-4 mg',
    frequency: 'Daily or every other day',
    cycleDuration: '4-8 weeks',
  },
  {
    name: 'FOXO4-DRI',
    purpose: 'Senolytic (Cellular Senescence Removal - Experimental)',
    recommendedDosage: 'Variable (research context)',
    frequency: 'Intermittent (e.g., few days a week)',
    cycleDuration: 'Short cycles (under investigation)',
  },
  {
    name: 'L-Carnitine',
    purpose: 'Fat Metabolism, Energy Production, Exercise Performance',
    recommendedDosage: '500 mg - 2 g (Injectable/Oral)',
    frequency: 'Daily or pre-workout',
    cycleDuration: 'Ongoing or cycled',
  },
  {
    name: 'Cagrilintide',
    purpose: 'Weight Loss (Amylin Analog - often combined)',
    recommendedDosage: 'Variable (under investigation, often with Semaglutide)',
    frequency: 'Once weekly (likely)',
    cycleDuration: 'Under investigation',
  },
  {
    name: 'Follistatin 344',
    purpose: 'Muscle Growth (Myostatin Inhibition - Advanced/Experimental)',
    recommendedDosage: '100 mcg',
    frequency: 'Daily or every other day',
    cycleDuration: '10-30 days (use with caution)',
  },
  {
    name: 'Tesamorelin/Ipamorelin Blend',
    purpose: 'Synergistic GH Release, Visceral Fat Reduction',
    recommendedDosage: 'Variable blend ratio (e.g., 1mg Tesa/200mcg Ipa)',
    frequency: 'Daily (often pre-bed)',
    cycleDuration: '12+ weeks, consult provider',
  },
  {
    name: 'Bronchogen',
    purpose: 'Bronchial/Lung Tissue Support',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Cardiogen',
    purpose: 'Cardiovascular System Support',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Cartalax',
    purpose: 'Cartilage and Musculoskeletal Support',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Chonluten',
    purpose: 'Lung and Respiratory Support',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Cortagen',
    purpose: 'Brain Cortex Support, Cognitive Function',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Livagen',
    purpose: 'Liver Function Support',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Ovagen',
    purpose: 'Liver and GIT Support',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Pancragen',
    purpose: 'Pancreas Support, Digestion',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Pinealon',
    purpose: 'Brain Function, Sleep, Anti-Aging',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Prostamax',
    purpose: 'Prostate Health Support',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Testagen',
    purpose: 'Testicular Function Support',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Thymagen',
    purpose: 'Immune System Support (similar to Thymalin)',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Vesugen',
    purpose: 'Blood Vessel Support, Cardiovascular Health',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Vesilute',
    purpose: 'Bladder Function Support',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  },
  {
    name: 'Vilon',
    purpose: 'Immune and General Well-being Support',
    recommendedDosage: '1-2 capsules',
    frequency: 'Daily',
    cycleDuration: '1 month, repeat as needed',
  }
].sort((a, b) => a.name.localeCompare(b.name)); // Sort the full list alphabetically


// Helper function to get a flat list of all available peptide names, sorted alphabetically
export const getAllPeptideNames = (): string[] => {
  return fullPeptideDatabase.map(p => p.name).sort(); // Removed grouping logic
};

// Helper function to get data for a specific peptide
export const getPeptideDataByName = (name: string): PeptideData | undefined => {
  return fullPeptideDatabase.find(p => p.name.toLowerCase() === name.toLowerCase());
};
