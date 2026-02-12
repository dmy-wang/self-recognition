// ============================================
// MBTI性格测试数据文件
// ============================================

const QUESTIONS = [
    { id: 1, text: "在社交聚会中，我通常精力充沛而不是感到疲惫", dimension: "EI", direction: "E" },
    { id: 2, text: "我更喜欢与几个亲密的朋友相处，而不是大型社交活动", dimension: "EI", direction: "I" },
    { id: 3, text: "我倾向于先说话后思考", dimension: "EI", direction: "E" },
    { id: 4, text: "我需要独处时间来恢复精力", dimension: "EI", direction: "I" },
    { id: 5, text: "我喜欢成为众人关注的焦点", dimension: "EI", direction: "E" },
    { id: 6, text: "我更喜欢一对一的深入交流", dimension: "EI", direction: "I" },
    { id: 7, text: "我容易被外界刺激分散注意力", dimension: "EI", direction: "E" },
    { id: 8, text: "我倾向于在内心深思熟虑后再表达观点", dimension: "EI", direction: "I" },
    { id: 9, text: "我关注具体的事实和细节", dimension: "SN", direction: "S" },
    { id: 10, text: "我更关注整体模式和可能性", dimension: "SN", direction: "N" },
    { id: 11, text: "我依赖实际经验做决定", dimension: "SN", direction: "S" },
    { id: 12, text: "我喜欢探索新的想法和概念", dimension: "SN", direction: "N" },
    { id: 13, text: "我更关注「是什么」而非「可能是什么」", dimension: "SN", direction: "S" },
    { id: 14, text: "我经常思考未来的可能性", dimension: "SN", direction: "N" },
    { id: 15, text: "我更喜欢具体明确的指示", dimension: "SN", direction: "S" },
    { id: 16, text: "我喜欢抽象和理论性的讨论", dimension: "SN", direction: "N" },
    { id: 17, text: "我做决定时主要依据逻辑分析", dimension: "TF", direction: "T" },
    { id: 18, text: "我做决定时会考虑他人的感受", dimension: "TF", direction: "F" },
    { id: 19, text: "我认为公平比和谐更重要", dimension: "TF", direction: "T" },
    { id: 20, text: "我认为和谐比公平更重要", dimension: "TF", direction: "F" },
    { id: 21, text: "我能够客观地批评他人", dimension: "TF", direction: "T" },
    { id: 22, text: "我尽量避免伤害他人的感情", dimension: "TF", direction: "F" },
    { id: 23, text: "我更看重真理而非感受", dimension: "TF", direction: "T" },
    { id: 24, text: "我更看重人际关系而非原则", dimension: "TF", direction: "F" },
    { id: 25, text: "我喜欢有计划地安排生活", dimension: "JP", direction: "J" },
    { id: 26, text: "我喜欢保持选项开放，灵活应对", dimension: "JP", direction: "P" },
    { id: 27, text: "我倾向于提前完成任务", dimension: "JP", direction: "J" },
    { id: 28, text: "我经常在最后期限前赶工", dimension: "JP", direction: "P" },
    { id: 29, text: "我喜欢事情有明确的结论", dimension: "JP", direction: "J" },
    { id: 30, text: "我喜欢探索各种可能性，不急于下结论", dimension: "JP", direction: "P" },
    { id: 31, text: "我制定详细的计划并遵循执行", dimension: "JP", direction: "J" },
    { id: 32, text: "我适应变化，不喜欢过于死板的计划", dimension: "JP", direction: "P" }
];

const DIMENSION_INFO = {
    EI: { name: "能量来源", E: "外向 (Extraversion)", I: "内向 (Introversion)", icon: "⚡" },
    SN: { name: "信息获取", S: "感觉 (Sensing)", N: "直觉 (Intuition)", icon: "🔍" },
    TF: { name: "决策方式", T: "思考 (Thinking)", F: "情感 (Feeling)", icon: "⚖️" },
    JP: { name: "生活方式", J: "判断 (Judging)", P: "知觉 (Perceiving)", icon: "📋" }
};

const MBTI_TYPES = {
    INTJ: { name: "建筑师", emoji: "🏗️", color: "#6366f1", nickname: "独立的战略家", desc: "富有想象力和战略性的思想家，一切皆在计划之中。你拥有独特的视角和强大的分析能力，善于制定长期计划并坚定执行。", strengths: ["战略思维", "独立自主", "意志坚定", "追求卓越"], careers: "科学家、战略顾问、系统分析师、投资银行家、建筑师", celebs: "伊隆·马斯克、马克·扎克伯格" },
    INTP: { name: "逻辑学家", emoji: "🧪", color: "#8b5cf6", nickname: "创新的思考者", desc: "富有创造力的分析者，对知识有着永不满足的渴望。你喜欢探索理论和概念，追求逻辑的一致性和理解的深度。", strengths: ["逻辑分析", "创新思维", "客观公正", "求知欲强"], careers: "程序员、科学家、哲学家、数学家、技术专家", celebs: "爱因斯坦、比尔·盖茨" },
    ENTJ: { name: "指挥官", emoji: "👑", color: "#dc2626", nickname: "大胆的领导者", desc: "大胆、富有想象力的领导者，总能找到解决方法或主导前进的方向。你天生具有领导才能，善于组织资源实现目标。", strengths: ["领导力强", "决策果断", "效率至上", "自信坚定"], careers: "企业高管、律师、管理顾问、政治家、创业者", celebs: "史蒂夫·乔布斯、玛格丽特·撒切尔" },
    ENTP: { name: "辩论家", emoji: "🎭", color: "#f59e0b", nickname: "聪明的创新者", desc: "聪明好奇的思想家，无法抗拒智力上的挑战。你喜欢辩论和探索新想法，善于发现问题的多种可能性。", strengths: ["思维敏捷", "创新能力强", "善于辩论", "适应力强"], careers: "创业者、律师、顾问、记者、产品经理", celebs: "本杰明·富兰克林、托马斯·爱迪生" },
    INFJ: { name: "提倡者", emoji: "🌟", color: "#10b981", nickname: "安静的理想主义者", desc: "安静而神秘，但能深刻启发他人。你拥有深刻的洞察力和强烈的价值观，致力于帮助他人实现潜能。", strengths: ["洞察力强", "富有同理心", "坚定原则", "追求意义"], careers: "心理咨询师、作家、人力资源、非营利组织、教育", celebs: "马丁·路德·金、特蕾莎修女" },
    INFP: { name: "调停者", emoji: "🕊️", color: "#06b6d4", nickname: "诗意的理想主义者", desc: "诗意、善良的利他主义者，总是渴望帮助良善之事。你拥有丰富的内心世界和深刻的价值观，追求真实和意义。", strengths: ["富有创意", "同理心强", "价值观坚定", "追求和谐"], careers: "作家、心理咨询师、艺术家、社会工作者、设计师", celebs: "莎士比亚、J.R.R.托尔金" },
    ENFJ: { name: "主人公", emoji: "🎪", color: "#ec4899", nickname: "魅力型领袖", desc: "富有魅力的领导者，能够激励听众。你天生善于理解和激励他人，致力于帮助每个人发挥潜能。", strengths: ["领导力强", "善于沟通", "富有同理心", "激励他人"], careers: "教师、培训师、人力资源、公关、政治家", celebs: "奥巴马、奥普拉" },
    ENFP: { name: "竞选者", emoji: "🌈", color: "#f472b6", nickname: "热情的创意者", desc: "热情、有创造力的社交达人，总能找到微笑的理由。你充满活力和创意，善于发现可能性并激励他人。", strengths: ["热情洋溢", "创意丰富", "善于交际", "乐观积极"], careers: "记者、演员、营销、心理咨询、创业者", celebs: "罗宾·威廉姆斯、威尔·史密斯" },
    ISTJ: { name: "物流师", emoji: "📦", color: "#475569", nickname: "务实的组织者", desc: "务实、专注于事实的个体，其可靠性不容置疑。你重视责任和承诺，以有条不紊的方式完成任务。", strengths: ["可靠负责", "注重细节", "有条不紊", "意志坚定"], careers: "会计师、审计师、项目经理、警察、军人", celebs: "沃伦·巴菲特、乔治·华盛顿" },
    ISFJ: { name: "守卫者", emoji: "🛡️", color: "#059669", nickname: "忠诚的守护者", desc: "非常专注和温暖的守护者，随时准备保护所爱之人。你温和可靠，默默付出，是团队中不可或缺的支持者。", strengths: ["忠诚可靠", "细心周到", "有耐心", "乐于助人"], careers: "护士、教师、行政助理、社会工作者、人力资源", celebs: "贝永·诺尔斯、罗莎·帕克斯" },
    ESTJ: { name: "总经理", emoji: "💼", color: "#b91c1c", nickname: "高效的管理者", desc: "出色的管理者，在管理事务和人员方面无与伦比。你善于组织和管理，确保事情按计划进行。", strengths: ["组织能力强", "务实高效", "责任心强", "意志坚定"], careers: "管理人员、军官、银行家、法官、项目经理", celebs: "米歇尔·奥巴马、桑德拉·戴·奥康纳" },
    ESFJ: { name: "执政官", emoji: "👥", color: "#db2777", nickname: "热情的社交者", desc: "极具同理心、爱交际的人，总是热心帮助他人。你善于营造和谐的氛围，关心他人的需求。", strengths: ["善于社交", "关心他人", "责任心强", "组织能力"], careers: "护士、教师、销售、人力资源、活动策划", celebs: "泰勒·斯威夫特、休·杰克曼" },
    ISTP: { name: "鉴赏家", emoji: "🔧", color: "#0d9488", nickname: "灵活的工匠", desc: "大胆而实际的实验家，善于使用各种工具。你喜欢动手解决问题，以冷静理性的方式应对挑战。", strengths: ["动手能力强", "冷静理性", "适应力强", "善于解决问题"], careers: "工程师、技师、飞行员、程序员、运动员", celebs: "克林特·伊斯特伍德、汤姆·克鲁斯" },
    ISFP: { name: "探险家", emoji: "🎨", color: "#7c3aed", nickname: "灵活的艺术家", desc: "灵活而有魅力的艺术家，随时准备探索和体验新事物。你温和敏感，善于用行动而非语言表达自己。", strengths: ["艺术天赋", "温和敏感", "适应力强", "忠于自我"], careers: "艺术家、设计师、摄影师、厨师、按摩师", celebs: "迈克尔·杰克逊、玛丽莲·梦露" },
    ESTP: { name: "企业家", emoji: "🚀", color: "#ea580c", nickname: "精明的行动者", desc: "聪明、精力充沛、善于感知的人，真正享受生活边缘。你喜欢冒险和行动，善于把握机会。", strengths: ["行动力强", "善于应变", "冒险精神", "社交能力强"], careers: "销售、企业家、运动员、演员、急救人员", celebs: "唐纳德·特朗普、麦当娜" },
    ESFP: { name: "表演者", emoji: "🎬", color: "#e11d48", nickname: "自发的娱乐者", desc: "自发的、精力充沛的娱乐者，生活永远不会无聊。你热情活泼，善于活在当下并带给他人快乐。", strengths: ["热情活泼", "善于表演", "活在当下", "社交能力强"], careers: "演员、主持人、销售、旅游导游、活动策划", celebs: "玛丽莲·梦露、埃尔维斯·普雷斯利" }
};

function getMBTIType(scores) {
    return (scores.EI >= 50 ? 'E' : 'I') + (scores.SN >= 50 ? 'N' : 'S') + (scores.TF >= 50 ? 'F' : 'T') + (scores.JP >= 50 ? 'J' : 'P');
}

function getDimensionResult(scores, dim) {
    if (dim === 'EI') return scores.EI >= 50 ? 'E' : 'I';
    if (dim === 'SN') return scores.SN >= 50 ? 'N' : 'S';
    if (dim === 'TF') return scores.TF >= 50 ? 'F' : 'T';
    if (dim === 'JP') return scores.JP >= 50 ? 'J' : 'P';
    return '';
}

const ANALYSIS_CONTENT = {
    dimensionDescriptions: {
        E: "你从外部世界获取能量，喜欢与人交往，善于表达，倾向于先行动后思考。",
        I: "你从内心世界获取能量，喜欢独处思考，善于倾听，倾向于先思考后行动。",
        S: "你关注具体的事实和细节，依赖实际经验，注重当下和现实。",
        N: "你关注整体模式和可能性，喜欢探索新想法，注重未来和潜力。",
        T: "你做决定时依据逻辑分析，重视客观事实和公平原则。",
        F: "你做决定时考虑他人感受，重视和谐关系和个人价值观。",
        J: "你喜欢有计划的生活，倾向于提前安排，追求确定性和完成感。",
        P: "你喜欢灵活的生活，倾向于随机应变，保持选项开放。"
    },
    typeDescriptions: {
        NT: "理性者 - 追求知识、能力和自主，善于战略思考。",
        NF: "理想主义者 - 追求意义、和谐和自我实现，善于理解他人。",
        SJ: "守护者 - 追求安全、传统和责任，善于维护秩序。",
        SP: "工匠 - 追求自由、行动和体验，善于适应变化。"
    }
};
