// ECG Rhythm Categories for organizing images
export const ECG_RHYTHM_CATEGORIES = {
    NORMAL: 'Normal Rhythms',
    BRADYCARDIA: 'Bradycardia',
    TACHYCARDIA: 'Tachycardia',
    ATRIAL_FIBRILLATION: 'Atrial Fibrillation',
    ATRIAL_FLUTTER: 'Atrial Flutter',
    VENTRICULAR_TACHYCARDIA: 'Ventricular Tachycardia',
    BUNDLE_BRANCH_BLOCKS: 'Bundle Branch Blocks',
    AV_BLOCKS: 'AV Blocks',
    PVC: 'Premature Ventricular Contractions',
    SVT: 'Supraventricular Tachycardia'
};
// Event themes (keeping the same as before for UI consistency)
export const eventThemes = {
    'shock-wave': {
        primary: '#DC2626',
        secondary: '#FEE2E2',
        gradient: 'bg-gradient-to-br from-red-600 via-orange-500 to-red-700',
        borderClass: 'border-red-400 hover:border-red-300',
        textClass: 'text-red-600',
        accentColor: '#EF4444'
    },
    'shock-zone-challenge': {
        primary: '#DC2626',
        secondary: '#FEE2E2',
        gradient: 'bg-gradient-to-br from-red-500 via-orange-500 to-red-600',
        borderClass: 'border-red-400 hover:border-red-300',
        textClass: 'text-red-600',
        accentColor: '#EF4444'
    },
    'code-pulse': {
        primary: '#7C2D12',
        secondary: '#FED7AA',
        gradient: 'bg-gradient-to-br from-orange-600 via-red-500 to-orange-700',
        borderClass: 'border-orange-400 hover:border-orange-300',
        textClass: 'text-orange-600',
        accentColor: '#EA580C'
    },
    'lead-master-quest': {
        primary: '#1E40AF',
        secondary: '#DBEAFE',
        gradient: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600',
        borderClass: 'border-blue-400 hover:border-blue-300',
        textClass: 'text-blue-600',
        accentColor: '#3B82F6'
    },
    'rhythm-hunter': {
        primary: '#581C87',
        secondary: '#F3E8FF',
        gradient: 'bg-gradient-to-br from-purple-600 via-violet-500 to-purple-700',
        borderClass: 'border-purple-400 hover:border-purple-300',
        textClass: 'text-purple-600',
        accentColor: '#8B5CF6'
    },
    'pulse-detective': {
        primary: '#0F766E',
        secondary: '#CCFBF1',
        gradient: 'bg-gradient-to-br from-teal-600 via-cyan-500 to-teal-700',
        borderClass: 'border-teal-400 hover:border-teal-300',
        textClass: 'text-teal-600',
        accentColor: '#14B8A6'
    }
};
