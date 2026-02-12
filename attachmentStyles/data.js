// ============================================
// 依恋类型测试数据文件
// ============================================

// 测试题目数据（基于ECR量表）
const QUESTIONS = [
    { id: 1, text: "我担心会被伴侣抛弃", dimension: "A", reverse: false },
    { id: 2, text: "我对于与他人亲近感到不舒服", dimension: "R", reverse: false },
    { id: 3, text: "当伴侣想要与我非常亲近时，我会感到不舒服", dimension: "R", reverse: false },
    { id: 4, text: "我担心伴侣不像我期望的那样在乎我", dimension: "A", reverse: false },
    { id: 5, text: "我希望与伴侣非常亲密，但这有时会吓跑对方", dimension: "A", reverse: false },
    { id: 6, text: "我发现很难完全信任伴侣", dimension: "R", reverse: false },
    { id: 7, text: "当伴侣不在身边时，我担心他们可能对别人感兴趣", dimension: "A", reverse: false },
    { id: 8, text: "我需要很多保证，才能相信伴侣是爱我的", dimension: "A", reverse: false },
    { id: 9, text: "我发现依赖伴侣很困难", dimension: "R", reverse: false },
    { id: 10, text: "我经常担心伴侣不再爱我", dimension: "A", reverse: false },
    { id: 11, text: "当别人想要与我过于亲近时，我会紧张", dimension: "R", reverse: false },
    { id: 12, text: "我担心伴侣不会一直陪着我", dimension: "A", reverse: false },
    { id: 13, text: "当伴侣向我倾诉内心感受时，我会感到不舒服", dimension: "R", reverse: false },
    { id: 14, text: "我经常担心伴侣想离开我", dimension: "A", reverse: false },
    { id: 15, text: "我喜欢与伴侣保持一定的情感距离", dimension: "R", reverse: false },
    { id: 16, text: "我发现向伴侣表达情感需求很困难", dimension: "R", reverse: false },
    { id: 17, text: "我经常担心我的伴侣不是真的爱我", dimension: "A", reverse: false },
    { id: 18, text: "当伴侣太依赖我时，我会感到厌烦", dimension: "R", reverse: false },
    { id: 19, text: "我担心如果我犯了错误，伴侣会离开我", dimension: "A", reverse: false },
    { id: 20, text: "我更喜欢不依赖他人的独立生活", dimension: "R", reverse: false },
    { id: 21, text: "我需要伴侣不断确认他们爱我", dimension: "A", reverse: false },
    { id: 22, text: "当有人试图与我过于亲近时，我会退缩", dimension: "R", reverse: false },
    { id: 23, text: "我担心伴侣会发现我的缺点而不爱我", dimension: "A", reverse: false },
    { id: 24, text: "我感到舒服依赖伴侣", dimension: "R", reverse: true },
    { id: 25, text: "我经常需要确认伴侣是否还爱我", dimension: "A", reverse: false },
    { id: 26, text: "我不介意让伴侣依赖我", dimension: "R", reverse: true },
    { id: 27, text: "当伴侣不在身边时，我会非常想念他们", dimension: "A", reverse: false },
    { id: 28, text: "我很容易与伴侣建立亲密关系", dimension: "R", reverse: true },
    { id: 29, text: "我有时会故意激怒伴侣来测试他们的爱", dimension: "A", reverse: false },
    { id: 30, text: "我喜欢与伴侣分享我的内心感受", dimension: "R", reverse: true },
    { id: 31, text: "我担心伴侣会因为我而感到厌烦", dimension: "A", reverse: false },
    { id: 32, text: "我感到自在与伴侣亲近", dimension: "R", reverse: true },
    { id: 33, text: "当关系变得亲密时，我会感到焦虑", dimension: "A", reverse: false },
    { id: 34, text: "我很容易信任伴侣", dimension: "R", reverse: true },
    { id: 35, text: "我担心没有人会真正爱我", dimension: "A", reverse: false },
    { id: 36, text: "我对亲密关系感到满意", dimension: "R", reverse: true }
];

// 维度信息
const DIMENSION_INFO = {
    A: {
        name: "焦虑维度",
        english: "Anxiety",
        icon: "😰",
        count: 18,
        description: "测量你在亲密关系中的焦虑程度，包括对被抛弃的恐惧、对伴侣情感的关注程度等。"
    },
    R: {
        name: "回避维度",
        english: "Avoidance",
        icon: "🛡️",
        count: 18,
        description: "测量你对亲密关系的回避程度，包括对亲近的不适、对独立的偏好等。"
    }
};

// 依恋类型信息
const ATTACHMENT_TYPES = {
    secure: {
        name: "安全型",
        icon: "💚",
        color: "#10b981",
        description: "你在亲密关系中感到舒适和自在。你既能享受亲密，也能保持独立。你信任伴侣，也相信自己值得被爱。你能够坦诚地表达情感需求，也能回应伴侣的需求。",
        characteristics: [
            "对亲密关系感到舒适",
            "能够信任他人",
            "善于表达情感需求",
            "能够独立也能依赖他人",
            "对关系有积极的期待"
        ],
        strengths: [
            "建立稳定、健康的亲密关系",
            "有效沟通情感需求",
            "在冲突中保持理性",
            "给予和接受支持",
            "平衡亲密与独立"
        ],
        challenges: [
            "可能难以理解不安全依恋者的感受",
            "在极端压力下也可能出现不安全感",
            "需要学会与不同依恋类型的人相处"
        ],
        advice: "你的依恋风格是健康关系的基础。继续保持开放和真诚的态度，同时也要理解并非所有人都有同样的安全感。在关系中，你的稳定性可以帮助伴侣成长。",
        loveStyle: "你在爱情中是稳定的存在。你能够给予伴侣安全感，也能接受伴侣的爱。你不会因为伴侣的靠近而感到窒息，也不会因为距离而感到恐慌。这种平衡让你的关系能够健康发展。",
        careerStyle: "在工作中，你能够与同事建立良好的合作关系。你既能独立完成任务，也善于团队协作。你的情绪稳定性让你在压力下也能保持良好表现。"
    },
    anxious: {
        name: "焦虑型",
        icon: "💛",
        color: "#f59e0b",
        description: "你在亲密关系中渴望亲密，但常常担心被抛弃。你对伴侣的情感变化非常敏感，需要频繁确认对方的爱。你的情感投入很深，但有时会因为过度关注关系而感到焦虑。",
        characteristics: [
            "渴望高度亲密",
            "担心被抛弃",
            "对伴侣情绪敏感",
            "需要频繁确认和保证",
            "容易感到不安全"
        ],
        strengths: [
            "情感投入深刻",
            "善于察觉他人情绪",
            "愿意为关系付出努力",
            "重视亲密关系",
            "有强烈的爱的能力"
        ],
        challenges: [
            "过度依赖伴侣的确认",
            "可能因小事而焦虑",
            "难以接受距离和独立",
            "容易陷入关系焦虑"
        ],
        advice: "学会自我安抚是关键。当焦虑感出现时，先尝试自己处理情绪，而不是立即寻求伴侣的确认。建立自我价值感，记住你的价值不取决于他人的认可。选择一个能够给予你安全感的伴侣很重要。",
        loveStyle: "你在爱情中投入很深，这既是优势也是挑战。你能够感受到爱的深度和强度，但也容易因为过度敏感而受伤。学会信任，给伴侣一些空间，你的关系会更加健康。",
        careerStyle: "你在工作中可能需要更多的反馈和认可。你善于察言观色，这让你在需要人际敏感度的工作中表现出色。但要注意不要过度依赖他人的评价。"
    },
    avoidant: {
        name: "回避型",
        icon: "💙",
        color: "#3b82f6",
        description: "你珍视独立和自主，对过于亲密的关系感到不适。你倾向于保持情感距离，依靠自己而不是依赖他人。你可能认为独立比亲密更重要，有时会下意识推开想要亲近的人。",
        characteristics: [
            "重视独立和自主",
            "对亲密感到不适",
            "倾向于自我依赖",
            "难以表达情感需求",
            "在压力时倾向于退缩"
        ],
        strengths: [
            "独立自主",
            "能够自我照顾",
            "不容易被情绪左右",
            "善于处理边界",
            "在独处时感到舒适"
        ],
        challenges: [
            "难以建立深层亲密关系",
            "可能被误解为冷漠",
            "在需要支持时不愿求助",
            "可能压抑情感需求"
        ],
        advice: "认识到亲密不等于失去自我。学会逐步敞开心扉，表达情感需求不是软弱的表现。尝试在保持独立的同时，也允许自己被爱和依赖他人。选择一个理解你需要空间的伴侣。",
        loveStyle: "你在爱情中需要空间和自由。你能够给予伴侣独立，但也可能让对方感到被推开。学会在保持自我的同时，也让伴侣进入你的内心世界。",
        careerStyle: "你在工作中独立自主，能够独自完成任务。你适合需要独立思考和行动的工作。但要注意，有时寻求帮助和合作也是必要的。"
    },
    fearful: {
        name: "恐惧型",
        icon: "💜",
        color: "#8b5cf6",
        description: "你对亲密关系有着复杂的感受：既渴望亲密，又害怕受伤。你可能经历过情感创伤，让你在关系中既想靠近又想逃离。这种矛盾让你在关系中常常感到困惑和挣扎。",
        characteristics: [
            "既渴望又害怕亲密",
            "对关系有矛盾感受",
            "可能经历过情感创伤",
            "难以信任他人",
            "情绪波动较大"
        ],
        strengths: [
            "情感体验深刻",
            "能够理解复杂性",
            "有很强的自我保护意识",
            "对他人痛苦有同理心",
            "有成长和改变的潜力"
        ],
        challenges: [
            "在亲密和疏离间摇摆",
            "难以建立稳定关系",
            "可能重复不健康模式",
            "需要处理过去的创伤"
        ],
        advice: "疗愈过去的创伤是关键。考虑寻求专业帮助来处理情感伤痛。学会识别你的依恋模式，在想要推开时停下来思考。逐步建立对安全关系的信任，你值得被爱和拥有健康的关系。",
        loveStyle: "你在爱情中经历着内心的拉锯战。你可能被不安全的人吸引，或在关系变得亲密时感到恐惧。学会识别健康的关系模式，给自己时间和空间去疗愈。",
        careerStyle: "你在工作中可能对权威和同事关系有复杂感受。你能够独立工作，但也需要学会信任和合作。处理好人我边界对你的职业发展很重要。"
    }
};

// 常模数据
const NORMS = {
    A: { mean: 45, sd: 18, description: "焦虑维度" },
    R: { mean: 40, sd: 16, description: "回避维度" }
};

// 计算百分位排名
function getPercentile(score, dimension) {
    const norm = NORMS[dimension];
    if (!norm) return 50;
    
    const zScore = (score - norm.mean) / norm.sd;
    const percentile = normalCDF(zScore) * 100;
    return Math.round(Math.max(1, Math.min(99, percentile)));
}

// 标准正态分布累积分布函数近似
function normalCDF(z) {
    const a1 =  0.254829592;
    const a2 = -0.284496736;
    const a3 =  1.421413741;
    const a4 = -1.453152027;
    const a5 =  1.061405429;
    const p  =  0.3275911;

    const sign = z < 0 ? -1 : 1;
    z = Math.abs(z) / Math.sqrt(2);

    const t = 1.0 / (1.0 + p * z);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-z * z);

    return 0.5 * (1.0 + sign * y);
}

// 获取百分位描述
function getPercentileDescription(percentile) {
    if (percentile >= 85) return "很高";
    if (percentile >= 70) return "较高";
    if (percentile >= 55) return "中等偏高";
    if (percentile >= 45) return "中等";
    if (percentile >= 30) return "中等偏低";
    if (percentile >= 15) return "较低";
    return "很低";
}

// 根据得分确定依恋类型
function getAttachmentType(anxietyScore, avoidanceScore) {
    const anxietyHigh = anxietyScore >= 50;
    const avoidanceHigh = avoidanceScore >= 50;
    
    if (!anxietyHigh && !avoidanceHigh) {
        return 'secure';
    } else if (anxietyHigh && !avoidanceHigh) {
        return 'anxious';
    } else if (!anxietyHigh && avoidanceHigh) {
        return 'avoidant';
    } else {
        return 'fearful';
    }
}

// 分析内容
const ANALYSIS_CONTENT = {
    // 维度详细分析
    dimensionAnalysis: {
        A: {
            high: "你在关系中表现出较高的焦虑倾向。你可能经常担心伴侣是否爱你、是否会离开你。这种焦虑可能源于早期的不安全依恋经历，让你对关系中的不确定性特别敏感。你可能需要更多的确认和保证才能感到安全。",
            medium: "你在关系中表现出适度的焦虑水平。你能够关注关系的状态，但不会过度担忧。这种平衡让你既能重视关系，又不会被焦虑所困扰。",
            low: "你在关系中表现出较低的焦虑倾向。你对伴侣和关系有基本的信任，不会经常担心被抛弃。这种安全感让你能够在关系中保持平静和自信。"
        },
        R: {
            high: "你在关系中表现出较高的回避倾向。你可能更倾向于独立，对过于亲密的关系感到不适。你可能习惯于依靠自己，难以向他人敞开心扉或寻求帮助。这种模式可能是一种自我保护机制。",
            medium: "你在关系中表现出适度的回避水平。你能够在亲密和独立之间找到平衡，既不会过度依赖他人，也不会完全封闭自己。",
            low: "你在关系中表现出较低的回避倾向。你对亲密关系感到舒适，能够与他人建立亲密的情感连接。你愿意依赖他人，也愿意让他人依赖你。"
        }
    },
    
    // 关系建议
    relationshipAdvice: {
        secure: {
            self: "继续保持健康的关系模式。你的安全感是宝贵的资源，可以帮助你建立和维持满意的关系。",
            partner: "你的稳定性可以帮助伴侣感到安全。如果你的伴侣有不安全依恋，你的耐心和理解可以帮助他们逐渐建立信任。"
        },
        anxious: {
            self: "学会自我安抚是关键。当焦虑感出现时，尝试识别触发因素，练习自我对话来平复情绪。建立自我价值感，记住你的价值不取决于他人的认可。",
            partner: "选择一个能够理解和回应你需求的伴侣很重要。清晰地表达你的需求，而不是通过抱怨或测试来获取关注。给伴侣一些空间，过度追求可能会适得其反。"
        },
        avoidant: {
            self: "认识到亲密不等于失去自我。尝试逐步敞开心扉，表达情感需求不是软弱的表现。在保持独立的同时，也允许自己被爱和依赖他人。",
            partner: "选择一个尊重你需要空间的伴侣。学会表达你对空间的需求，而不是通过疏远来处理。记住，真正的独立包括能够选择依赖他人。"
        },
        fearful: {
            self: "疗愈过去的创伤是关键。考虑寻求专业帮助来处理情感伤痛。学会识别你的依恋模式，在想要推开时停下来思考为什么。",
            partner: "选择一个安全、稳定的伴侣很重要。逐步建立信任，不要急于进入或退出关系。记住，你值得被爱和拥有健康的关系。"
        }
    },
    
    // 成长建议
    growthTips: {
        secure: [
            "继续保持开放和真诚的沟通",
            "帮助他人建立安全感",
            "在关系中保持好奇心",
            "定期反思关系状态"
        ],
        anxious: [
            "练习自我安抚技巧，如深呼吸、正念冥想",
            "建立自我价值感，发展独立兴趣",
            "学会识别焦虑触发点",
            "练习延迟寻求确认的冲动",
            "与信任的朋友分享感受"
        ],
        avoidant: [
            "练习识别和表达情感需求",
            "逐步增加亲密程度，从小事开始",
            "反思回避行为背后的恐惧",
            "尝试在安全的关系中依赖他人",
            "学会接受他人的关心和支持"
        ],
        fearful: [
            "考虑寻求专业心理咨询",
            "识别并挑战消极的自我信念",
            "逐步建立对安全关系的信任",
            "练习在想要推开时停下来",
            "寻找支持性的社交网络"
        ]
    },
    
    // 名人参考
    famousExamples: {
        secure: "许多成功维持长期稳定关系的公众人物展现出安全型依恋特质，如能够平衡事业与家庭、在关系中保持真诚和开放。",
        anxious: "一些艺术家和创作者可能具有焦虑型依恋特质，他们的敏感让他们能够深刻体验情感，但也可能在关系中经历更多波动。",
        avoidant: "一些独立成就突出的人物可能具有回避型依恋特质，他们的独立性让他们能够专注目标，但可能需要学习建立更深层的连接。",
        fearful: "一些经历丰富人生转折的人物可能具有恐惧型依恋特质，他们的复杂性让他们能够理解人性的多面，但也需要疗愈过去的伤痛。"
    }
};
