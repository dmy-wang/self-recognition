// ============================================
// 情商测试数据文件
// ============================================

const QUESTIONS = [
    { id: 1, text: "我能够准确识别自己当下的情绪状态", dimension: "SA", reverse: false },
    { id: 2, text: "当情绪出现时，我常常不知道自己为什么会这样感觉", dimension: "SA", reverse: true },
    { id: 3, text: "我能够清楚地表达自己的感受", dimension: "SA", reverse: false },
    { id: 4, text: "我经常反思自己的情绪反应", dimension: "SA", reverse: false },
    { id: 5, text: "我很难描述自己的内心感受", dimension: "SA", reverse: true },
    { id: 6, text: "当感到沮丧时，我能够很快调整自己的状态", dimension: "EM", reverse: false },
    { id: 7, text: "我容易被负面情绪淹没", dimension: "EM", reverse: true },
    { id: 8, text: "我能够控制自己的冲动行为", dimension: "EM", reverse: false },
    { id: 9, text: "在压力下，我仍然能够保持冷静", dimension: "EM", reverse: false },
    { id: 10, text: "我经常因为情绪波动而影响工作或生活", dimension: "EM", reverse: true },
    { id: 11, text: "我能够为了长期目标而延迟满足", dimension: "SM", reverse: false },
    { id: 12, text: "遇到挫折时，我很容易放弃", dimension: "SM", reverse: true },
    { id: 13, text: "我能够自我激励去完成困难的任务", dimension: "SM", reverse: false },
    { id: 14, text: "我经常拖延，难以开始行动", dimension: "SM", reverse: true },
    { id: 15, text: "我能够为自己的行为负责", dimension: "SM", reverse: false },
    { id: 16, text: "我能够敏锐地察觉他人的情绪变化", dimension: "EP", reverse: false },
    { id: 17, text: "我经常误解他人的感受", dimension: "EP", reverse: true },
    { id: 18, text: "我能够站在他人的角度思考问题", dimension: "EP", reverse: false },
    { id: 19, text: "我很难理解为什么有些人会对某些事情反应强烈", dimension: "EP", reverse: true },
    { id: 20, text: "我能够通过非语言线索（表情、语气）理解他人感受", dimension: "EP", reverse: false },
    { id: 21, text: "我善于建立和维护人际关系", dimension: "SS", reverse: false },
    { id: 22, text: "我在社交场合感到不自在", dimension: "SS", reverse: true },
    { id: 23, text: "我能够有效地解决人际冲突", dimension: "SS", reverse: false },
    { id: 24, text: "我经常在人际关系中遇到困难", dimension: "SS", reverse: true },
    { id: 25, text: "我能够根据不同场合调整自己的行为方式", dimension: "SS", reverse: false },
    { id: 26, text: "我能够清晰地表达自己的需求和想法", dimension: "SS", reverse: false },
    { id: 27, text: "当别人倾诉时，我能够给予恰当的回应和支持", dimension: "EP", reverse: false },
    { id: 28, text: "我能够接受批评而不感到被攻击", dimension: "EM", reverse: false },
    { id: 29, text: "我能够从失败中学习并继续前进", dimension: "SM", reverse: false },
    { id: 30, text: "我能够识别情绪对自己决策的影响", dimension: "SA", reverse: false }
];

const DIMENSION_INFO = {
    SA: {
        name: "自我觉察",
        english: "Self-Awareness",
        icon: "🔍",
        count: 6,
        description: "识别和理解自己情绪的能力，包括情绪的起因、表现和影响。"
    },
    EM: {
        name: "情绪管理",
        english: "Emotion Management",
        icon: "⚖️",
        count: 6,
        description: "调节和控制情绪的能力，包括应对压力、控制冲动和保持情绪稳定。"
    },
    SM: {
        name: "自我激励",
        english: "Self-Motivation",
        icon: "🔥",
        count: 6,
        description: "驱动自己实现目标的能力，包括延迟满足、克服挫折和持续努力。"
    },
    EP: {
        name: "同理心",
        english: "Empathy",
        icon: "💝",
        count: 6,
        description: "感知和理解他人情绪的能力，包括换位思考和情感共鸣。"
    },
    SS: {
        name: "社交技巧",
        english: "Social Skills",
        icon: "🤝",
        count: 6,
        description: "建立和维护人际关系的能力，包括沟通、合作和冲突解决。"
    }
};

const NORMS = {
    SA: { mean: 55, sd: 15 },
    EM: { mean: 50, sd: 18 },
    SM: { mean: 52, sd: 16 },
    EP: { mean: 55, sd: 14 },
    SS: { mean: 50, sd: 17 }
};

function getPercentile(score, dimension) {
    const norm = NORMS[dimension];
    if (!norm) return 50;
    const zScore = (score - norm.mean) / norm.sd;
    const percentile = normalCDF(zScore) * 100;
    return Math.round(Math.max(1, Math.min(99, percentile)));
}

function normalCDF(z) {
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741;
    const a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
    const sign = z < 0 ? -1 : 1;
    z = Math.abs(z) / Math.sqrt(2);
    const t = 1.0 / (1.0 + p * z);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-z * z);
    return 0.5 * (1.0 + sign * y);
}

function getPercentileDescription(percentile) {
    if (percentile >= 85) return "优秀";
    if (percentile >= 70) return "良好";
    if (percentile >= 55) return "中等偏上";
    if (percentile >= 45) return "中等";
    if (percentile >= 30) return "中等偏下";
    if (percentile >= 15) return "需提升";
    return "需重点提升";
}

function getEQLevel(totalScore) {
    if (totalScore >= 80) return { level: "高情商", emoji: "🌟", color: "#10b981", desc: "你在情绪智力方面表现出色，能够很好地理解和管理自己与他人的情绪。" };
    if (totalScore >= 65) return { level: "较高情商", emoji: "⭐", color: "#3b82f6", desc: "你的情绪智力处于较好水平，在大多数情况下能够有效处理情绪相关问题。" };
    if (totalScore >= 50) return { level: "中等情商", emoji: "📊", color: "#f59e0b", desc: "你的情绪智力处于平均水平，有一定的提升空间。" };
    if (totalScore >= 35) return { level: "需提升", emoji: "📈", color: "#ef4444", desc: "你的情绪智力有较大的提升空间，建议加强相关能力的培养。" };
    return { level: "需重点提升", emoji: "🎯", color: "#dc2626", desc: "建议系统学习情绪管理技巧，提升情绪智力。" };
}

const ANALYSIS_CONTENT = {
    dimensionAnalysis: {
        SA: {
            high: "你对自己的情绪有敏锐的觉察能力。你能够清晰地识别自己的情绪状态，理解情绪产生的原因，并意识到情绪对行为的影响。这种自我认知是情商的基础，让你能够更好地管理自己。",
            medium: "你对自己情绪有一定的觉察能力，但有时可能难以准确识别或理解自己的情绪。通过更多的自我反思和情绪记录，你可以提升这方面的能力。",
            low: "你对自己情绪的觉察能力有待提升。你可能经常感到困惑，不清楚自己为什么会这样感觉。建议通过情绪日记、冥想等方式增强自我觉察。"
        },
        EM: {
            high: "你拥有出色的情绪管理能力。你能够在压力下保持冷静，有效控制冲动，并快速从负面情绪中恢复。这种能力让你在各种情境下都能保持稳定的表现。",
            medium: "你的情绪管理能力处于中等水平。大多数情况下你能够控制自己的情绪，但在极端压力下可能会感到困难。学习一些情绪调节技巧会对你有帮助。",
            low: "你的情绪管理能力需要加强。你可能经常被情绪所困扰，难以控制冲动或从负面情绪中恢复。建议学习深呼吸、认知重构等情绪调节技巧。"
        },
        SM: {
            high: "你具有很强的自我激励能力。你能够为长期目标坚持努力，面对挫折不轻易放弃，并且善于自我驱动。这种品质是成功的重要保障。",
            medium: "你的自我激励能力处于中等水平。你有一定的目标感和毅力，但有时可能会被短期诱惑所影响。明确目标价值和建立奖励机制可以帮助你。",
            low: "你的自我激励能力需要提升。你可能容易受到挫折影响，难以坚持长期目标。建议设定小目标、建立正向反馈循环来增强自我激励。"
        },
        EP: {
            high: "你具有很强的同理心。你能够敏锐地感知他人的情绪，理解他人的立场，并给予恰当的情感回应。这让你在人际关系中表现出色。",
            medium: "你的同理心处于中等水平。你能够理解他人的基本感受，但有时可能难以捕捉更微妙的情绪信号。多倾听和观察可以帮助你提升。",
            low: "你的同理心需要加强。你可能经常误解他人的感受，或难以理解他人的反应。建议多练习倾听，尝试站在他人角度思考问题。"
        },
        SS: {
            high: "你拥有出色的社交技巧。你善于建立和维护人际关系，能够有效沟通、解决冲突，并根据不同场合调整自己的行为。这让你在社交场合游刃有余。",
            medium: "你的社交技巧处于中等水平。你能够处理基本的社交情境，但在复杂的人际互动中可能会感到挑战。多参与社交活动并学习沟通技巧会有帮助。",
            low: "你的社交技巧需要提升。你可能经常在人际交往中遇到困难，感到不自在或不知所措。建议学习基本的沟通技巧，并逐步扩大社交圈。"
        }
    },
    
    strengths: {
        SA: ["能够准确识别情绪", "理解情绪起因", "意识到情绪影响", "善于自我反思"],
        EM: ["压力下保持冷静", "控制冲动", "快速恢复情绪", "适应变化"],
        SM: ["目标导向", "延迟满足", "克服挫折", "持续努力"],
        EP: ["感知他人情绪", "换位思考", "情感共鸣", "理解他人立场"],
        SS: ["建立人际关系", "有效沟通", "解决冲突", "团队合作"]
    },
    
    tips: {
        SA: ["每天花5分钟反思自己的情绪", "记录情绪日记", "注意身体对情绪的反应", "问自己「我现在感觉如何？」"],
        EM: ["学习深呼吸技巧", "练习正念冥想", "识别情绪触发点", "建立健康的情绪宣泄渠道"],
        SM: ["设定明确的短期和长期目标", "建立奖励机制", "将大目标分解为小步骤", "回顾过去的成功经验"],
        EP: ["练习积极倾听", "注意他人的非语言信号", "问开放式问题了解他人", "尝试理解不同观点"],
        SS: ["主动与人交流", "学习有效的沟通技巧", "参与团队活动", "练习解决冲突的方法"]
    }
};
