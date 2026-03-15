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

// Var-4: Fuzzy Color Range
export const var4Results: ModelResult[] = [
  {
    rank: 1,
    model: 'Qwen-Image',
    type: 'Open',
    organization: 'Alibaba',
    colorPrecision: { rgbEd: 0.280, rgbRm: 0.261, lab00: 0.303, labHue: 0.531, labHyab: 0.137, labCh: 0.532, mean: 0.345 },
    colorPurity: { sd: 0.123, ced: 0.004, hf: 0.018, mean: 0.048 },
    date: '2025.1'
  },
  {
    rank: 2,
    model: 'SANA',
    type: 'Open',
    organization: 'NVIDIA',
    colorPrecision: { rgbEd: 0.321, rgbRm: 0.309, lab00: 0.367, labHue: 0.492, labHyab: 0.166, labCh: 0.594, mean: 0.379 },
    colorPurity: { sd: 0.202, ced: 0.048, hf: 0.017, mean: 0.089 },
    date: '2024.11'
  },
  {
    rank: 3,
    model: 'FLUX.1',
    type: 'Open',
    organization: 'Black Forest Labs',
    colorPrecision: { rgbEd: 0.336, rgbRm: 0.326, lab00: 0.382, labHue: 0.513, labHyab: 0.166, labCh: 0.565, mean: 0.385 },
    colorPurity: { sd: 0.062, ced: 0.001, hf: 0.001, mean: 0.021 },
    date: '2024.8'
  },
  {
    rank: 4,
    model: 'Janus-Pro-1.5',
    type: 'Open',
    organization: 'DeepSeek',
    colorPrecision: { rgbEd: 0.281, rgbRm: 0.281, lab00: 0.380, labHue: 0.610, labHyab: 0.171, labCh: 0.561, mean: 0.388 },
    colorPurity: { sd: 0.086, ced: 0.005, hf: 0.004, mean: 0.031 },
    date: '2025.1'
  },
  {
    rank: 5,
    model: 'OmniGen2',
    type: 'Open',
    organization: 'VectorSpace Lab',
    colorPrecision: { rgbEd: 0.384, rgbRm: 0.371, lab00: 0.400, labHue: 0.498, labHyab: 0.165, labCh: 0.672, mean: 0.420 },
    colorPurity: { sd: 0.132, ced: 0.042, hf: 0.017, mean: 0.064 },
    date: '2025.2'
  }
]

// Var-5: Multilingual (Chinese)
export const var5CResults: ModelResult[] = [
  {
    rank: 1,
    model: 'Qwen-Image',
    type: 'Open',
    organization: 'Alibaba',
    colorPrecision: { rgbEd: 0.145, rgbRm: 0.142, lab00: 0.178, labHue: 0.207, labHyab: 0.075, labCh: 0.250, mean: 0.168 },
    colorPurity: { sd: 0.081, ced: 0.005, hf: 0.013, mean: 0.033 },
    date: '2025.1'
  },
  {
    rank: 2,
    model: 'SANA',
    type: 'Open',
    organization: 'NVIDIA',
    colorPrecision: { rgbEd: 0.304, rgbRm: 0.297, lab00: 0.344, labHue: 0.352, labHyab: 0.154, labCh: 0.528, mean: 0.332 },
    colorPurity: { sd: 0.178, ced: 0.041, hf: 0.011, mean: 0.077 },
    date: '2024.11'
  },
  {
    rank: 3,
    model: 'Janus-Pro-1.5',
    type: 'Open',
    organization: 'DeepSeek',
    colorPrecision: { rgbEd: 0.340, rgbRm: 0.334, lab00: 0.373, labHue: 0.580, labHyab: 0.149, labCh: 0.423, mean: 0.369 },
    colorPurity: { sd: 0.468, ced: 0.025, hf: 0.013, mean: 0.168 },
    date: '2025.1'
  },
  {
    rank: 4,
    model: 'FLUX.1',
    type: 'Open',
    organization: 'Black Forest Labs',
    colorPrecision: { rgbEd: 0.415, rgbRm: 0.411, lab00: 0.397, labHue: 0.411, labHyab: 0.170, labCh: 0.453, mean: 0.373 },
    colorPurity: { sd: 0.529, ced: 0.105, hf: 0.051, mean: 0.228 },
    date: '2024.8'
  },
  {
    rank: 5,
    model: 'OmniGen2',
    type: 'Open',
    organization: 'VectorSpace Lab',
    colorPrecision: { rgbEd: 0.397, rgbRm: 0.391, lab00: 0.414, labHue: 0.446, labHyab: 0.187, labCh: 0.568, mean: 0.401 },
    colorPurity: { sd: 0.173, ced: 0.051, hf: 0.015, mean: 0.080 },
    date: '2025.2'
  }
]

// Var-5: Multilingual (French)
export const var5FResults: ModelResult[] = [
  {
    rank: 1,
    model: 'Qwen-Image',
    type: 'Open',
    organization: 'Alibaba',
    colorPrecision: { rgbEd: 0.161, rgbRm: 0.159, lab00: 0.201, labHue: 0.227, labHyab: 0.088, labCh: 0.305, mean: 0.192 },
    colorPurity: { sd: 0.051, ced: 0.002, hf: 0.007, mean: 0.020 },
    date: '2025.1'
  },
  {
    rank: 2,
    model: 'SANA',
    type: 'Open',
    organization: 'NVIDIA',
    colorPrecision: { rgbEd: 0.306, rgbRm: 0.299, lab00: 0.342, labHue: 0.391, labHyab: 0.149, labCh: 0.478, mean: 0.329 },
    colorPurity: { sd: 0.257, ced: 0.031, hf: 0.041, mean: 0.110 },
    date: '2024.11'
  },
  {
    rank: 3,
    model: 'FLUX.1',
    type: 'Open',
    organization: 'Black Forest Labs',
    colorPrecision: { rgbEd: 0.372, rgbRm: 0.368, lab00: 0.390, labHue: 0.395, labHyab: 0.170, labCh: 0.507, mean: 0.367 },
    colorPurity: { sd: 0.267, ced: 0.020, hf: 0.016, mean: 0.101 },
    date: '2024.8'
  },
  {
    rank: 4,
    model: 'Janus-Pro-1.5',
    type: 'Open',
    organization: 'DeepSeek',
    colorPrecision: { rgbEd: 0.343, rgbRm: 0.337, lab00: 0.382, labHue: 0.539, labHyab: 0.169, labCh: 0.525, mean: 0.386 },
    colorPurity: { sd: 0.389, ced: 0.014, hf: 0.015, mean: 0.139 },
    date: '2025.1'
  },
  {
    rank: 5,
    model: 'OmniGen2',
    type: 'Open',
    organization: 'VectorSpace Lab',
    colorPrecision: { rgbEd: 0.428, rgbRm: 0.420, lab00: 0.431, labHue: 0.461, labHyab: 0.208, labCh: 0.662, mean: 0.435 },
    colorPurity: { sd: 0.379, ced: 0.116, hf: 0.024, mean: 0.173 },
    date: '2025.2'
  }
]

// Var-6: Color Space (RGB)
export const var6RgbResults: ModelResult[] = [
  {
    rank: 1,
    model: 'Qwen-Image',
    type: 'Open',
    organization: 'Alibaba',
    colorPrecision: { rgbEd: 0.212, rgbRm: 0.206, lab00: 0.221, labHue: 0.245, labHyab: 0.097, labCh: 0.293, mean: 0.212 },
    colorPurity: { sd: 0.063, ced: 0.001, hf: 0.009, mean: 0.025 },
    date: '2025.1'
  },
  {
    rank: 2,
    model: 'FLUX.1',
    type: 'Open',
    organization: 'Black Forest Labs',
    colorPrecision: { rgbEd: 0.359, rgbRm: 0.352, lab00: 0.394, labHue: 0.402, labHyab: 0.170, labCh: 0.536, mean: 0.370 },
    colorPurity: { sd: 0.153, ced: 0.001, hf: 0.002, mean: 0.052 },
    date: '2024.8'
  },
  {
    rank: 3,
    model: 'SANA',
    type: 'Open',
    organization: 'NVIDIA',
    colorPrecision: { rgbEd: 0.331, rgbRm: 0.323, lab00: 0.383, labHue: 0.426, labHyab: 0.174, labCh: 0.588, mean: 0.374 },
    colorPurity: { sd: 0.381, ced: 0.061, hf: 0.034, mean: 0.158 },
    date: '2024.11'
  },
  {
    rank: 4,
    model: 'Janus-Pro-1.5',
    type: 'Open',
    organization: 'DeepSeek',
    colorPrecision: { rgbEd: 0.343, rgbRm: 0.339, lab00: 0.406, labHue: 0.540, labHyab: 0.171, labCh: 0.538, mean: 0.393 },
    colorPurity: { sd: 0.250, ced: 0.003, hf: 0.005, mean: 0.086 },
    date: '2025.1'
  },
  {
    rank: 5,
    model: 'OmniGen2',
    type: 'Open',
    organization: 'VectorSpace Lab',
    colorPrecision: { rgbEd: 0.427, rgbRm: 0.429, lab00: 0.447, labHue: 0.494, labHyab: 0.191, labCh: 0.510, mean: 0.416 },
    colorPurity: { sd: 0.056, ced: 0.012, hf: 0.001, mean: 0.023 },
    date: '2025.2'
  }
]

// Var-6: Color Space (HSL)
export const var6HslResults: ModelResult[] = [
  {
    rank: 1,
    model: 'Qwen-Image',
    type: 'Open',
    organization: 'Alibaba',
    colorPrecision: { rgbEd: 0.314, rgbRm: 0.303, lab00: 0.346, labHue: 0.371, labHyab: 0.167, labCh: 0.587, mean: 0.351 },
    colorPurity: { sd: 0.102, ced: 0.004, hf: 0.007, mean: 0.037 },
    date: '2025.1'
  },
  {
    rank: 2,
    model: 'FLUX.1',
    type: 'Open',
    organization: 'Black Forest Labs',
    colorPrecision: { rgbEd: 0.366, rgbRm: 0.358, lab00: 0.388, labHue: 0.392, labHyab: 0.164, labCh: 0.498, mean: 0.361 },
    colorPurity: { sd: 0.139, ced: 0.003, hf: 0.002, mean: 0.048 },
    date: '2024.8'
  },
  {
    rank: 3,
    model: 'OmniGen2',
    type: 'Open',
    organization: 'VectorSpace Lab',
    colorPrecision: { rgbEd: 0.374, rgbRm: 0.367, lab00: 0.394, labHue: 0.424, labHyab: 0.176, labCh: 0.530, mean: 0.377 },
    colorPurity: { sd: 0.103, ced: 0.034, hf: 0.003, mean: 0.047 },
    date: '2025.2'
  },
  {
    rank: 4,
    model: 'SANA',
    type: 'Open',
    organization: 'NVIDIA',
    colorPrecision: { rgbEd: 0.339, rgbRm: 0.332, lab00: 0.387, labHue: 0.443, labHyab: 0.173, labCh: 0.579, mean: 0.378 },
    colorPurity: { sd: 0.335, ced: 0.052, hf: 0.027, mean: 0.138 },
    date: '2024.11'
  },
  {
    rank: 5,
    model: 'Janus-Pro-1.5',
    type: 'Open',
    organization: 'DeepSeek',
    colorPrecision: { rgbEd: 0.355, rgbRm: 0.346, lab00: 0.396, labHue: 0.563, labHyab: 0.171, labCh: 0.575, mean: 0.404 },
    colorPurity: { sd: 0.264, ced: 0.007, hf: 0.006, mean: 0.092 },
    date: '2025.1'
  }
]

export const variations = [
  { id: 'var1', name: 'Single Color', shortName: 'Var-1', description: 'Single uniform color generation' },
  { id: 'var2', name: 'Dual Block', shortName: 'Var-2', description: 'Two-color horizontal/vertical split' },
  { id: 'var3', name: 'Quad Block', shortName: 'Var-3', description: 'Four-color 2x2 grid layout' },
  { id: 'var4', name: 'Fuzzy Range', shortName: 'Var-4', description: 'Acceptable color range constraints' },
  { id: 'var5c', name: 'Chinese', shortName: 'Var-5 (CN)', description: 'Multilingual: Chinese prompts' },
  { id: 'var5f', name: 'French', shortName: 'Var-5 (FR)', description: 'Multilingual: French prompts' },
  { id: 'var6rgb', name: 'RGB Format', shortName: 'Var-6 (RGB)', description: 'Color space: RGB encoding' },
  { id: 'var6hsl', name: 'HSL Format', shortName: 'Var-6 (HSL)', description: 'Color space: HSL encoding' }
]


