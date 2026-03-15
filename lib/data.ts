export interface ModelResult {
  rank: number
  model: string
  type: 'Open' | 'Closed'
  organization: string
  colorPrecision: {
    rgbEd: number
    rgbRm: number
    lab00: number
    labHue: number
    labHyab: number
    labCh: number
    mean: number
  }
  colorPurity: {
    sd: number
    ced: number
    hf: number
    mean: number
  }
  date: string
}

export const var1Results: ModelResult[] = [
  {
    rank: 1,
    model: 'GPT-Image-1.5',
    type: 'Closed',
    organization: 'OpenAI',
    colorPrecision: { rgbEd: 0.054, rgbRm: 0.053, lab00: 0.053, labHue: 0.050, labHyab: 0.026, labCh: 0.080, mean: 0.053 },
    colorPurity: { sd: 0.013, ced: 0.030, hf: 0.001, mean: 0.015 },
    date: '2025.3'
  },
  {
    rank: 2,
    model: 'Nano-Banana',
    type: 'Closed',
    organization: 'Google',
    colorPrecision: { rgbEd: 0.111, rgbRm: 0.108, lab00: 0.104, labHue: 0.091, labHyab: 0.050, labCh: 0.149, mean: 0.102 },
    colorPurity: { sd: 0.011, ced: 0.001, hf: 0.001, mean: 0.004 },
    date: '2025.2'
  },
  {
    rank: 3,
    model: 'Qwen-Image',
    type: 'Open',
    organization: 'Alibaba',
    colorPrecision: { rgbEd: 0.156, rgbRm: 0.153, lab00: 0.180, labHue: 0.206, labHyab: 0.077, labCh: 0.246, mean: 0.171 },
    colorPurity: { sd: 0.058, ced: 0.002, hf: 0.021, mean: 0.027 },
    date: '2025.1'
  },
  {
    rank: 4,
    model: 'Seedream-4.5',
    type: 'Closed',
    organization: 'ByteDance',
    colorPrecision: { rgbEd: 0.198, rgbRm: 0.193, lab00: 0.208, labHue: 0.246, labHyab: 0.091, labCh: 0.277, mean: 0.203 },
    colorPurity: { sd: 0.215, ced: 0.013, hf: 0.023, mean: 0.083 },
    date: '2024.12'
  },
  {
    rank: 5,
    model: 'SANA',
    type: 'Open',
    organization: 'NVIDIA',
    colorPrecision: { rgbEd: 0.288, rgbRm: 0.284, lab00: 0.331, labHue: 0.375, labHyab: 0.145, labCh: 0.477, mean: 0.319 },
    colorPurity: { sd: 0.232, ced: 0.028, hf: 0.030, mean: 0.097 },
    date: '2024.11'
  },
  {
    rank: 6,
    model: 'FLUX.1',
    type: 'Open',
    organization: 'Black Forest Labs',
    colorPrecision: { rgbEd: 0.364, rgbRm: 0.357, lab00: 0.387, labHue: 0.403, labHyab: 0.159, labCh: 0.469, mean: 0.356 },
    colorPurity: { sd: 0.044, ced: 0.001, hf: 0.001, mean: 0.015 },
    date: '2024.8'
  },
  {
    rank: 7,
    model: 'Janus-Pro-1.5',
    type: 'Open',
    organization: 'DeepSeek',
    colorPrecision: { rgbEd: 0.344, rgbRm: 0.343, lab00: 0.410, labHue: 0.561, labHyab: 0.169, labCh: 0.527, mean: 0.396 },
    colorPurity: { sd: 0.193, ced: 0.006, hf: 0.004, mean: 0.068 },
    date: '2025.1'
  },
  {
    rank: 8,
    model: 'OmniGen2',
    type: 'Open',
    organization: 'VectorSpace Lab',
    colorPrecision: { rgbEd: 0.397, rgbRm: 0.390, lab00: 0.402, labHue: 0.449, labHyab: 0.178, labCh: 0.526, mean: 0.390 },
    colorPurity: { sd: 0.202, ced: 0.070, hf: 0.016, mean: 0.096 },
    date: '2025.2'
  }
]

export const var2Results: ModelResult[] = [
  {
    rank: 1,
    model: 'GPT-Image-1.5',
    type: 'Closed',
    organization: 'OpenAI',
    colorPrecision: { rgbEd: 0.056, rgbRm: 0.055, lab00: 0.056, labHue: 0.061, labHyab: 0.027, labCh: 0.086, mean: 0.057 },
    colorPurity: { sd: 0.265, ced: 0.001, hf: 0.002, mean: 0.089 },
    date: '2025.3'
  },
  {
    rank: 2,
    model: 'Nano-Banana',
    type: 'Closed',
    organization: 'Google',
    colorPrecision: { rgbEd: 0.113, rgbRm: 0.111, lab00: 0.107, labHue: 0.105, labHyab: 0.052, labCh: 0.157, mean: 0.107 },
    colorPurity: { sd: 0.226, ced: 0.005, hf: 0.005, mean: 0.079 },
    date: '2025.2'
  },
  {
    rank: 3,
    model: 'Qwen-Image',
    type: 'Open',
    organization: 'Alibaba',
    colorPrecision: { rgbEd: 0.128, rgbRm: 0.125, lab00: 0.143, labHue: 0.177, labHyab: 0.065, labCh: 0.216, mean: 0.143 },
    colorPurity: { sd: 0.111, ced: 0.007, hf: 0.028, mean: 0.049 },
    date: '2025.1'
  },
  {
    rank: 4,
    model: 'Seedream-4.5',
    type: 'Closed',
    organization: 'ByteDance',
    colorPrecision: { rgbEd: 0.201, rgbRm: 0.195, lab00: 0.218, labHue: 0.286, labHyab: 0.096, labCh: 0.294, mean: 0.216 },
    colorPurity: { sd: 0.421, ced: 0.018, hf: 0.043, mean: 0.161 },
    date: '2024.12'
  },
  {
    rank: 5,
    model: 'SANA',
    type: 'Open',
    organization: 'NVIDIA',
    colorPrecision: { rgbEd: 0.315, rgbRm: 0.308, lab00: 0.352, labHue: 0.396, labHyab: 0.157, labCh: 0.531, mean: 0.346 },
    colorPurity: { sd: 0.312, ced: 0.019, hf: 0.021, mean: 0.118 },
    date: '2024.11'
  },
  {
    rank: 6,
    model: 'Janus-Pro-1.5',
    type: 'Open',
    organization: 'DeepSeek',
    colorPrecision: { rgbEd: 0.335, rgbRm: 0.327, lab00: 0.359, labHue: 0.511, labHyab: 0.155, labCh: 0.480, mean: 0.365 },
    colorPurity: { sd: 0.216, ced: 0.009, hf: 0.012, mean: 0.079 },
    date: '2025.1'
  },
  {
    rank: 7,
    model: 'FLUX.1',
    type: 'Open',
    organization: 'Black Forest Labs',
    colorPrecision: { rgbEd: 0.357, rgbRm: 0.353, lab00: 0.384, labHue: 0.448, labHyab: 0.165, labCh: 0.490, mean: 0.367 },
    colorPurity: { sd: 0.117, ced: 0.005, hf: 0.005, mean: 0.042 },
    date: '2024.8'
  },
  {
    rank: 8,
    model: 'OmniGen2',
    type: 'Open',
    organization: 'VectorSpace Lab',
    colorPrecision: { rgbEd: 0.388, rgbRm: 0.382, lab00: 0.396, labHue: 0.419, labHyab: 0.185, labCh: 0.572, mean: 0.390 },
    colorPurity: { sd: 0.236, ced: 0.036, hf: 0.026, mean: 0.099 },
    date: '2025.2'
  }
]

export const var3Results: ModelResult[] = [
  {
    rank: 1,
    model: 'GPT-Image-1.5',
    type: 'Closed',
    organization: 'OpenAI',
    colorPrecision: { rgbEd: 0.073, rgbRm: 0.071, lab00: 0.075, labHue: 0.083, labHyab: 0.035, labCh: 0.108, mean: 0.074 },
    colorPurity: { sd: 0.364, ced: 0.004, hf: 0.006, mean: 0.125 },
    date: '2025.3'
  },
  {
    rank: 2,
    model: 'Nano-Banana',
    type: 'Closed',
    organization: 'Google',
    colorPrecision: { rgbEd: 0.122, rgbRm: 0.119, lab00: 0.114, labHue: 0.113, labHyab: 0.055, labCh: 0.161, mean: 0.114 },
    colorPurity: { sd: 0.338, ced: 0.009, hf: 0.011, mean: 0.120 },
    date: '2025.2'
  },
  {
    rank: 3,
    model: 'Qwen-Image',
    type: 'Open',
    organization: 'Alibaba',
    colorPrecision: { rgbEd: 0.229, rgbRm: 0.224, lab00: 0.264, labHue: 0.333, labHyab: 0.115, labCh: 0.371, mean: 0.258 },
    colorPurity: { sd: 0.174, ced: 0.015, hf: 0.029, mean: 0.073 },
    date: '2025.1'
  },
  {
    rank: 4,
    model: 'Seedream-4.5',
    type: 'Closed',
    organization: 'ByteDance',
    colorPrecision: { rgbEd: 0.211, rgbRm: 0.203, lab00: 0.226, labHue: 0.305, labHyab: 0.100, labCh: 0.306, mean: 0.227 },
    colorPurity: { sd: 0.520, ced: 0.023, hf: 0.053, mean: 0.199 },
    date: '2024.12'
  },
  {
    rank: 5,
    model: 'Janus-Pro-1.5',
    type: 'Open',
    organization: 'DeepSeek',
    colorPrecision: { rgbEd: 0.338, rgbRm: 0.334, lab00: 0.383, labHue: 0.514, labHyab: 0.160, labCh: 0.476, mean: 0.370 },
    colorPurity: { sd: 0.220, ced: 0.022, hf: 0.024, mean: 0.089 },
    date: '2025.1'
  },
  {
    rank: 6,
    model: 'SANA',
    type: 'Open',
    organization: 'NVIDIA',
    colorPrecision: { rgbEd: 0.369, rgbRm: 0.360, lab00: 0.401, labHue: 0.442, labHyab: 0.187, labCh: 0.642, mean: 0.403 },
    colorPurity: { sd: 0.433, ced: 0.030, hf: 0.035, mean: 0.166 },
    date: '2024.11'
  },
  {
    rank: 7,
    model: 'FLUX.1',
    type: 'Open',
    organization: 'Black Forest Labs',
    colorPrecision: { rgbEd: 0.386, rgbRm: 0.379, lab00: 0.416, labHue: 0.473, labHyab: 0.189, labCh: 0.602, mean: 0.409 },
    colorPurity: { sd: 0.142, ced: 0.008, hf: 0.008, mean: 0.053 },
    date: '2024.8'
  },
  {
    rank: 8,
    model: 'OmniGen2',
    type: 'Open',
    organization: 'VectorSpace Lab',
    colorPrecision: { rgbEd: 0.410, rgbRm: 0.405, lab00: 0.433, labHue: 0.465, labHyab: 0.204, labCh: 0.631, mean: 0.425 },
    colorPurity: { sd: 0.242, ced: 0.024, hf: 0.025, mean: 0.097 },
    date: '2025.2'
  }
]

export const obedienceLevels = [
  { level: 'L1', name: 'Semantic', description: 'Overall meaning: "a cat on grass"', type: 'probabilistic' },
  { level: 'L2', name: 'Relational', description: 'Attribute binding: "red hat, blue scarf"', type: 'probabilistic' },
  { level: 'L3', name: 'Constraint', description: 'Negative rules: "no X", "without Y"', type: 'probabilistic' },
  { level: 'L4', name: 'Instructional', description: 'Exact values: position, color, size', type: 'deterministic', current: true },
  { level: 'L5', name: 'Systemic', description: 'Global layout & architecture', type: 'deterministic' }
]

export const variations = [
  { id: 'var1', name: 'Single Color', shortName: 'Var-1', description: 'Single uniform color generation', difficulty: 1 },
  { id: 'var2', name: 'Dual Block', shortName: 'Var-2', description: 'Two-color horizontal/vertical split', difficulty: 2 },
  { id: 'var3', name: 'Quad Block', shortName: 'Var-3', description: 'Four-color 2×2 grid layout', difficulty: 3 },
  { id: 'var4', name: 'Fuzzy Range', shortName: 'Var-4', description: 'Acceptable color range constraints', difficulty: 4 },
  { id: 'var5', name: 'Multilingual', shortName: 'Var-5', description: 'Cross-lingual prompt evaluation', difficulty: 3 },
  { id: 'var6', name: 'Color Space', shortName: 'Var-6', description: 'RGB, HSL, Hex encoding tests', difficulty: 2 }
]


