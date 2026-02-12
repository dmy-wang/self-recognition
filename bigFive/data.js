// ============================================
// 大五人格测试数据文件 - 增强版分析内容
// ============================================

// 测试题目数据
const QUESTIONS = [
    { id: 1, text: "我是一个健谈的人", dimension: "E", reverse: false },
    { id: 2, text: "我容易挑剔别人的毛病", dimension: "A", reverse: true },
    { id: 3, text: "我做事彻底、不马虎", dimension: "C", reverse: false },
    { id: 4, text: "我经常感到情绪低落、忧郁", dimension: "N", reverse: false },
    { id: 5, text: "我善于提出独创性的新想法", dimension: "O", reverse: false },
    { id: 6, text: "我是一个内向、沉默寡言的人", dimension: "E", reverse: true },
    { id: 7, text: "我乐于助人、对人无私", dimension: "A", reverse: false },
    { id: 8, text: "我有时做事粗心大意", dimension: "C", reverse: true },
    { id: 9, text: "我很放松、能很好应对压力", dimension: "N", reverse: true },
    { id: 10, text: "我对很多不同事物感到好奇", dimension: "O", reverse: false },
    { id: 11, text: "我充满活力", dimension: "E", reverse: false },
    { id: 12, text: "我容易与人发生争执", dimension: "A", reverse: true },
    { id: 13, text: "我是一个工作可靠的人", dimension: "C", reverse: false },
    { id: 14, text: "我经常会感到紧张", dimension: "N", reverse: false },
    { id: 15, text: "我思维敏捷、有深度", dimension: "O", reverse: false },
    { id: 16, text: "我善于调动气氛、带动他人热情", dimension: "E", reverse: false },
    { id: 17, text: "我是一个宽容的人", dimension: "A", reverse: false },
    { id: 18, text: "我做事容易杂乱无章", dimension: "C", reverse: true },
    { id: 19, text: "我很少担忧", dimension: "N", reverse: true },
    { id: 20, text: "我想象力丰富", dimension: "O", reverse: false },
    { id: 21, text: "我是一个比较安静的人", dimension: "E", reverse: true },
    { id: 22, text: "我通常信任他人", dimension: "A", reverse: false },
    { id: 23, text: "我倾向于懒惰", dimension: "C", reverse: true },
    { id: 24, text: "我情绪稳定、不容易心烦意乱", dimension: "N", reverse: true },
    { id: 25, text: "我是一个有创造力的人", dimension: "O", reverse: false },
    { id: 26, text: "我有主见、善于表达", dimension: "E", reverse: false },
    { id: 27, text: "我有时对人冷淡", dimension: "A", reverse: true },
    { id: 28, text: "我能坚持不懈直到任务完成", dimension: "C", reverse: false },
    { id: 29, text: "我情绪多变", dimension: "N", reverse: false },
    { id: 30, text: "我重视艺术和审美体验", dimension: "O", reverse: false },
    { id: 31, text: "我有时害羞、拘谨", dimension: "E", reverse: true },
    { id: 32, text: "我对几乎所有人都体贴、友善", dimension: "A", reverse: false },
    { id: 33, text: "我做事有效率", dimension: "C", reverse: false },
    { id: 34, text: "我在紧张情境下能保持冷静", dimension: "N", reverse: true },
    { id: 35, text: "我喜欢按常规做事，不喜欢变化", dimension: "O", reverse: true },
    { id: 36, text: "我外向、善于社交", dimension: "E", reverse: false },
    { id: 37, text: "我有时对他人粗鲁", dimension: "A", reverse: true },
    { id: 38, text: "我做事有计划并能贯彻执行", dimension: "C", reverse: false },
    { id: 39, text: "我容易紧张", dimension: "N", reverse: false },
    { id: 40, text: "我喜欢思考、琢磨各种想法", dimension: "O", reverse: false },
    { id: 41, text: "我对艺术兴趣不大", dimension: "O", reverse: true },
    { id: 42, text: "我喜欢与他人合作", dimension: "A", reverse: false },
    { id: 43, text: "我容易分心", dimension: "C", reverse: true },
    { id: 44, text: "我在艺术、音乐或文学方面有较高修养", dimension: "O", reverse: false }
];

// 维度信息配置（大幅扩展）
const DIMENSION_INFO = {
    O: {
        name: "开放性",
        english: "Openness to Experience",
        icon: "🎨",
        count: 10,
        descriptions: {
            high: "你是一个充满好奇心和创造力的探索者。你的思维不受传统框架束缚，总能从独特的角度看待问题。你对艺术、哲学、新观念有着天然的亲近感，喜欢深入思考生命的意义。你的想象力丰富，常常能在别人看不到可能性的地方发现机会。",
            medium: "你在开放与务实之间保持着健康的平衡。你既能欣赏新事物带来的刺激，也懂得传统经验的价值。面对变化时，你会谨慎评估后再做决定，这让你既不会错过好机会，也不会盲目冒险。",
            low: "你是一个脚踏实地的实干家。你相信经过验证的方法，重视稳定和可预测性。你的务实态度让你在执行具体任务时表现出色，你更关注「怎么做」而非「为什么」。这种特质让你成为团队中可靠的执行者。"
        },
        career: {
            high: "创意总监、UX设计师、产品创新、科研人员、作家、艺术家、建筑师、战略咨询、创业者、哲学/心理学研究",
            medium: "市场营销、产品经理、教育工作者、媒体从业者、培训师、品牌策划",
            low: "财务分析、审计、质量管理、行政管理、工程技术、数据分析、流程优化、标准化工作"
        },
        love: {
            high: "你在感情中追求灵魂的共鸣。你渴望与伴侣进行深度的思想交流，分享对生活、艺术、哲学的见解。你喜欢和伴侣一起探索新事物——可能是一家新餐厅、一个陌生的城市，或者一个全新的爱好。你需要的伴侣是能够理解你天马行空想法的人，而不是试图「让你脚踏实地」的人。",
            medium: "你在感情中既享受新鲜感，也珍视稳定。你愿意和伴侣尝试新事物，但也重视建立稳固的日常。你能够欣赏伴侣的独特之处，同时也期待关系有可预期的节奏。",
            low: "你在感情中是稳定可靠的存在。你重视关系的确定性，喜欢建立固定的相处模式和传统。你可能不太热衷于频繁的「惊喜」，但你的忠诚和一致性让伴侣感到安心。找一个同样重视稳定的人，你们会建立起坚实的感情基础。"
        },
        growth: {
            high: "你的成长方向是学会将创意落地。尝试为你的想法制定具体的执行计划，不要让好点子停留在脑海中。",
            medium: "继续保持这种平衡，在需要创新时大胆尝试，在需要执行时专注落地。",
            low: "尝试每月给自己安排一次「舒适区挑战」——读一本不同领域的书、尝试一种新的食物、或者用不同的路线上班。小步骤的尝试会逐渐拓宽你的视野。"
        },
        communication: {
            high: "你喜欢抽象和概念性的讨论，善于用比喻和类比表达观点。与务实型的人沟通时，记得多给具体例子。",
            medium: "你能够根据对象调整沟通方式，既能聊理念也能谈细节。",
            low: "你的沟通风格直接、具体、注重事实。与创意型的人交流时，试着多一些耐心，他们的「发散」可能会带来意想不到的价值。"
        }
    },
    C: {
        name: "尽责性",
        english: "Conscientiousness",
        icon: "📋",
        count: 9,
        descriptions: {
            high: "你是天生的计划者和执行者。你对自己有高标准，做事有条不紊，很少让人失望。你的自律能力让你能够坚持长期目标，即使过程枯燥也不会轻易放弃。你重视承诺，说到做到是你的人生信条。在你的世界里，细节决定成败，准备工作永远不嫌多。",
            medium: "你在规划和灵活之间找到了平衡点。你知道什么时候需要严格按计划行事，什么时候可以随机应变。你能够完成重要任务，同时也不会被琐碎的细节困住。这种弹性让你在多变的环境中也能保持效率。",
            low: "你是一个活在当下的人，不喜欢被计划和规则束缚。你更看重过程中的体验而非最终的结果。你的灵活性让你能够快速适应变化，在混乱中也能找到自己的节奏。你相信「船到桥头自然直」，这种心态让你在面对不确定性时比较从容。"
        },
        career: {
            high: "项目经理、医生、律师、会计师、金融分析师、科研人员、工程师、质量总监、运营管理、企业高管",
            medium: "销售、人力资源、产品运营、咨询顾问、市场专员、客户成功经理",
            low: "艺术创作、自由撰稿、创意策划、活动执行、初创公司、需要高度灵活性的岗位"
        },
        love: {
            high: "你在感情中是可靠的「定海神针」。你会认真规划约会、记住重要的纪念日、兑现每一个承诺。但要注意，不要把感情也变成一个「项目」来管理。学会享受一些计划外的浪漫，允许关系有自然生长的空间。你的伴侣需要感受到爱，而不只是「被照顾得很好」。",
            medium: "你在感情中既负责任又不失灵活。你会为重要的事情做准备，但也能享受即兴的约会。这种平衡让你的关系既有安全感又不乏惊喜。",
            low: "你为感情带来自发性和冒险精神。你们的约会可能充满惊喜，但也可能因为「忘记」某些事情而产生摩擦。找一个能欣赏你随性风格的伴侣，同时也试着在重要的事情上多一些计划性——比如记住对方的生日。"
        },
        growth: {
            high: "你的成长方向是学会「战略性放松」。不是所有事情都需要100分，学会区分「必须完美」和「足够好就行」。给自己安排一些没有目标的休闲时间。",
            medium: "你已经找到了不错的平衡，继续根据任务的重要性灵活调整你的投入程度。",
            low: "尝试从小事开始建立习惯——比如每天固定时间做一件事。使用待办清单或日历提醒，外部工具可以弥补内在动力的不足。"
        },
        communication: {
            high: "你的沟通风格结构化、有条理，喜欢按步骤讨论问题。与随性的人沟通时，试着接受一些「跳跃性」的讨论方式。",
            medium: "你能够根据情况调整沟通的正式程度，既能做正式汇报也能轻松闲聊。",
            low: "你的沟通风格随意、发散，想到什么说什么。在正式场合或与注重条理的人沟通时，试着先组织一下思路。"
        }
    },
    E: {
        name: "外向性",
        english: "Extraversion",
        icon: "🎉",
        count: 8,
        descriptions: {
            high: "你是人群中的发光体，天生的社交达人。与人互动让你充满能量，你享受成为关注的焦点，也善于调动气氛。你的热情具有感染力，能够轻松地与陌生人建立联系。你喜欢热闹，独处太久会让你感到无聊甚至焦虑。你的社交网络广泛，朋友遍布各个圈子。",
            medium: "你是一个灵活的社交者，能够在热闹和安静之间自如切换。你享受与朋友相聚的时光，但也珍惜独处的空间。你不需要成为派对的中心，但在需要时也能够站出来。这种平衡让你在各种社交场合都能感到舒适。",
            low: "你是一个内心丰富的思考者。你更喜欢深度的一对一交流，而非表面的社交应酬。独处对你来说是充电而非消耗，你在安静的环境中思维最为活跃。你的朋友圈可能不大，但每一段关系都经过精心维护。你不是不善社交，只是更有选择性。"
        },
        career: {
            high: "销售总监、公关经理、培训讲师、主持人、演员、政治家、社区运营、商务拓展、团队领导、活动策划",
            medium: "咨询顾问、产品经理、市场营销、人力资源、客户经理、项目协调",
            low: "软件开发、数据分析、研究员、作家、设计师、会计、档案管理、后端技术、独立顾问"
        },
        love: {
            high: "你在感情中热情洋溢，喜欢和伴侣一起参加社交活动、认识新朋友。你需要一个能跟上你社交节奏的伴侣，或者至少是一个理解并支持你社交需求的人。注意给内向的伴侣足够的独处空间，不要把他们的安静误解为不开心。",
            medium: "你在感情中既能享受二人世界，也能一起参与社交活动。你理解伴侣可能有不同的社交需求，能够灵活调整。",
            low: "你在感情中深沉而专注，更喜欢高质量的二人时光而非热闹的社交。你是一个好的倾听者，能够给伴侣深度的关注。找一个同样享受安静相处的人，或者一个尊重你独处需求的外向伴侣。"
        },
        growth: {
            high: "你的成长方向是培养独处的能力。尝试每周安排一些独自反思的时间，学会在安静中也能感到舒适。深度思考需要安静的空间。",
            medium: "继续保持这种灵活性，根据自己的能量状态选择社交或独处。",
            low: "尝试每月主动参加一次社交活动，即使感到不舒服也坚持待一会儿。社交技能是可以练习的，而且你可能会发现一些意外的收获。"
        },
        communication: {
            high: "你善于口头表达，喜欢通过对话来思考和处理信息。与内向的人沟通时，给他们更多思考和回应的时间。",
            medium: "你能够根据对象和场合调整沟通方式，既能活跃气氛也能安静倾听。",
            low: "你更喜欢书面沟通或深思熟虑后再发言。在需要即时回应的场合，可以提前准备一些要点。"
        }
    },
    A: {
        name: "宜人性",
        english: "Agreeableness",
        icon: "🤝",
        count: 9,
        descriptions: {
            high: "你是一个温暖的利他主义者，天生具有同理心。你能够敏锐地感知他人的情绪和需求，并且真心愿意提供帮助。你重视和谐，会主动化解冲突，有时甚至会牺牲自己的利益来维护关系。你容易信任他人，相信人性本善。你的善良让你身边聚集了很多朋友。",
            medium: "你在善良和自我保护之间保持平衡。你愿意帮助他人，但不会无底线地付出。你能够体谅别人的处境，同时也会坚持自己的原则。你知道什么时候该妥协，什么时候该坚持，这让你在人际关系中游刃有余。",
            low: "你是一个独立而直接的人，不会为了取悦他人而委屈自己。你更关注效率和结果，而非人际关系的和谐。你有竞争意识，相信适者生存。你的直言不讳可能会让一些人不舒服，但也让你赢得了「真实」的评价。你不容易被操纵，因为你对他人的动机保持警惕。"
        },
        career: {
            high: "护士、社工、心理咨询师、教师、客服主管、人力资源、非营利组织、调解员、团队协调、医疗护理",
            medium: "产品经理、运营、咨询、市场、项目管理、业务分析",
            low: "律师、谈判专家、投资银行、销售（竞争性）、创业者、管理咨询、执法、军事领导"
        },
        love: {
            high: "你在感情中是体贴入微的伴侣，总是把对方的需求放在第一位。但这也是你需要注意的地方——不要在关系中失去自我。学会表达自己的需求，设立健康的边界。真正爱你的人不会希望你一直牺牲自己。",
            medium: "你在感情中既能照顾对方，也能表达自己的需求。你懂得在付出和索取之间保持平衡，这是健康关系的基础。",
            low: "你在感情中直接坦诚，不会玩猜心游戏。你需要一个能够欣赏你独立性和直接风格的伴侣。在关系中，试着多一些温柔的表达，有时候「怎么说」和「说什么」一样重要。"
        },
        growth: {
            high: "你的成长方向是学会说「不」。练习在不伤害关系的前提下拒绝不合理的请求。记住，照顾好自己才能更好地照顾他人。",
            medium: "继续保持这种平衡，在需要时展现同理心，在必要时坚持立场。",
            low: "尝试在日常互动中多一些「无目的的善意」——一个微笑、一句赞美、一次主动帮助。你可能会发现，这些小举动带来的回报超出预期。"
        },
        communication: {
            high: "你的沟通风格温和、体贴，善于倾听和共情。在需要表达不同意见时，试着更直接一些，不要过度包装。",
            medium: "你能够根据情况调整沟通的温度，既能温和也能直接。",
            low: "你的沟通风格直接、高效，不喜欢绕弯子。在敏感话题上，试着多考虑对方的感受，有时候一点点铺垫会让信息更容易被接受。"
        }
    },
    N: {
        name: "神经质",
        english: "Emotional Stability",
        icon: "🌊",
        count: 8,
        descriptions: {
            high: "你的情绪世界丰富而敏感，像一面灵敏的雷达，能够捕捉到环境中细微的变化。你容易感受到压力、焦虑和负面情绪，但这种敏感性也让你更能理解他人的痛苦。你的情绪波动可能让你感到疲惫，但也赋予了你深刻的洞察力和创造力。很多艺术家和作家都有类似的特质。",
            medium: "你的情绪相对稳定，但在压力下也会有所波动——这是完全正常的人类反应。你能够感知自己的情绪变化，并且有一定的调节能力。你既不会被情绪完全控制，也不会压抑自己的感受。",
            low: "你是情绪的主人，而非奴隶。你能够在压力下保持冷静，很少被焦虑或负面情绪困扰。你的情绪稳定性让你成为危机时刻的定心丸，别人会自然地向你寻求支持。你可能不太理解为什么有些人会「想太多」，但这正是你的优势所在。"
        },
        career: {
                high: "艺术创作、写作、用户研究、创意工作、需要高度共情的岗位（建议配合情绪管理训练）",
                medium: "大多数职业都适合，可根据其他维度选择",
                low: "急诊医生、消防员、飞行员、危机管理、高管、军事指挥、交易员、谈判专家"
        },
        love: {
            high: "你在感情中投入深、感受强烈，爱得热烈也可能伤得深刻。你需要一个情绪稳定、有耐心的伴侣，能够在你情绪波动时给予支持而非评判。学习情绪调节技巧（如正念、认知重构）会让你的关系更健康。记住，你的敏感是礼物，不是缺陷。",
            medium: "你在感情中情绪表达适度，能够处理大多数冲突和压力。你既能感受爱的甜蜜，也能在困难时保持理性。",
            low: "你为关系带来稳定和安全感，是伴侣的「避风港」。但要注意，不要因为自己不容易焦虑就忽视伴侣的情绪需求。试着更多地询问和倾听伴侣的感受，即使你觉得「没什么大不了」。"
        },
        growth: {
            high: "你的成长方向是建立情绪调节的工具箱：正念冥想、运动、写日记、与信任的人倾诉。学会区分「感受到情绪」和「被情绪控制」。你的敏感是天赋，学会驾驭它。",
            medium: "继续保持对自己情绪的觉察，在压力大的时期主动使用放松技巧。",
            low: "尝试更多地关注和表达自己的情绪。情绪稳定是优势，但过度压抑可能导致问题积累。定期检视自己的内心状态。"
        },
        communication: {
            high: "你的沟通可能受情绪影响较大，在情绪激动时试着暂停对话，等冷静后再继续。学会用「我感到...」的句式表达，而非指责。",
            medium: "你能够在大多数情况下保持理性沟通，在情绪波动时也有一定的自我调节能力。",
            low: "你的沟通风格冷静、理性，不容易被情绪带偏。与情绪敏感的人沟通时，试着多一些情感上的回应，不要只关注「解决问题」。"
        }
    }
};

// 常模数据（基于大五人格研究的典型人群分布）
const NORMS = {
    O: { mean: 55, sd: 15, description: "开放性" },
    C: { mean: 50, sd: 18, description: "尽责性" },
    E: { mean: 52, sd: 16, description: "外向性" },
    A: { mean: 58, sd: 14, description: "宜人性" },
    N: { mean: 45, sd: 20, description: "神经质" }
};

// 计算百分位排名
function getPercentile(score, dimension) {
    const norm = NORMS[dimension];
    if (!norm) return 50;
    
    const zScore = (score - norm.mean) / norm.sd;
    
    // 使用标准正态分布累积分布函数近似计算百分位
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
    if (percentile >= 95) return "极高（前5%）";
    if (percentile >= 85) return "很高（前15%）";
    if (percentile >= 70) return "较高（前30%）";
    if (percentile >= 55) return "中上（略高于平均）";
    if (percentile >= 45) return "中等（平均水平）";
    if (percentile >= 30) return "中下（略低于平均）";
    if (percentile >= 15) return "较低（后30%）";
    if (percentile >= 5) return "很低（后15%）";
    return "极低（后5%）";
}

// 获取置信区间
function getConfidenceInterval(score, count) {
    const se = 10 / Math.sqrt(count);
    return {
        low: Math.max(0, Math.round(score - 1.96 * se)),
        high: Math.min(100, Math.round(score + 1.96 * se))
    };
}

// 分析内容配置（大幅扩展）
const ANALYSIS_CONTENT = {
    // 性格总结模板（更丰富的版本）
    summaryTemplates: [
        function(scores, highest, lowest, secondHighest) {
            const h = DIMENSION_INFO[highest];
            const l = DIMENSION_INFO[lowest];
            const sh = DIMENSION_INFO[secondHighest];
            return `你的性格画像显示，<strong>${h.name}</strong>是你最突出的特质，这意味着${h.descriptions.high}同时，你的<strong>${sh.name}</strong>也相当显著，两者结合让你在${getComboInsight(highest, secondHighest)}方面有独特优势。相对而言，<strong>${l.name}</strong>是你可以发展的方向。`;
        },
        function(scores, highest, lowest) {
            const h = DIMENSION_INFO[highest];
            return `从整体来看，你是一个以<strong>${h.name}</strong>为核心特质的人。这种特质在你的生活、工作和人际关系中都有明显体现。了解这一点可以帮助你更好地发挥优势、规避盲点，找到最适合自己的发展路径。`;
        }
    ],
    
    // 核心优势（扩展版）
    strengths: {
        O_high: ["富有创造力和想象力，能够提出独特的解决方案", "对新事物保持开放，学习能力强", "思维活跃，善于从不同角度看问题", "审美能力强，对美有敏锐的感知"],
        O_low: ["务实可靠，专注于可行的解决方案", "重视经验和传统，决策稳健", "执行力强，不会被天马行空的想法分散注意力", "脚踏实地，注重实际效果"],
        C_high: ["自律性强，能够坚持长期目标", "做事有条理，很少出错", "责任心强，值得信赖", "时间管理能力出色，效率高"],
        C_low: ["灵活适应变化，不被计划束缚", "享受当下，生活态度轻松", "能够在混乱中找到机会", "创意思维不受条框限制"],
        E_high: ["善于社交，人脉资源丰富", "充满活力，能够感染和带动他人", "表达能力强，善于推销想法", "在团队中自然承担领导角色"],
        E_low: ["善于深度思考和独立工作", "倾听能力强，能够给予他人充分关注", "不需要外部刺激也能保持专注", "在一对一关系中表现出色"],
        A_high: ["富有同理心，善于理解他人", "团队协作能力强，是优秀的队友", "人际关系和谐，朋友众多", "善于化解冲突，维护团队氛围"],
        A_low: ["独立思考，不随波逐流", "敢于表达不同意见，推动变革", "谈判能力强，能够争取利益", "决策果断，不会过度考虑他人看法"],
        N_high: ["情感丰富，富有艺术感染力", "敏感细腻，能够察觉他人未说出的需求", "有深度的同理心，理解他人的痛苦", "内省能力强，自我觉察程度高"],
        N_low: ["情绪稳定，是团队的定心丸", "抗压能力强，危机时刻保持冷静", "不容易被负面情绪影响决策", "给周围人带来安全感和稳定感"]
    },
    
    // 潜在盲点（扩展版）
    weaknesses: {
        O_high: ["可能过于理想化，忽视现实限制", "容易对常规工作感到厌倦", "想法太多可能导致执行力不足", "可能被认为「不切实际」"],
        O_low: ["可能错过创新机会", "面对变化时适应较慢", "可能被认为思维僵化", "对新方法的接受度较低"],
        C_high: ["可能过于追求完美，效率反而下降", "灵活性不足，难以应对突发情况", "可能给自己和他人过大压力", "有时会因小失大，过度关注细节"],
        C_low: ["可能在截止日期和承诺上出问题", "容易分心，难以完成长期项目", "可能被认为不够可靠", "缺乏规划可能导致机会流失"],
        E_high: ["可能过度依赖社交，独处能力弱", "有时说得多做得少", "可能忽视需要安静完成的工作", "在需要深度思考时可能浮躁"],
        E_low: ["可能错过社交带来的机会", "在需要展示自己时可能吃亏", "可能被误解为冷漠或不合群", "团队协作中可能参与度不足"],
        A_high: ["可能过度牺牲自己的需求", "难以拒绝他人，容易被利用", "回避冲突可能导致问题积累", "可能在竞争环境中处于劣势"],
        A_low: ["可能在人际关系中制造摩擦", "团队协作时可能遇到阻力", "直接的风格可能伤害他人", "可能被认为缺乏同理心"],
        N_high: ["情绪波动可能影响工作和关系", "容易陷入焦虑和担忧", "压力管理是持续的挑战", "可能过度解读他人的言行"],
        N_low: ["可能忽视自己的情绪信号", "可能难以理解情绪敏感的人", "情感表达可能不够丰富", "可能被认为「太冷静」或缺乏热情"]
    },

    // 维度组合洞察
    combos: {
        "O+E": "创意社交家——你既有创新思维，又善于表达和推广想法，适合需要创意展示的工作",
        "O+C": "创新执行者——你能够产生好想法并且落地执行，这是稀缺的组合",
        "O+A": "共情创造者——你的创造力与同理心结合，适合用户体验、设计思维相关工作",
        "O+N_low": "稳定的创新者——你有创造力但不会被情绪干扰，能够持续稳定地产出",
        "C+E": "高效领导者——你既有执行力又有影响力，是天生的管理者",
        "C+A": "可靠的团队成员——你既负责任又好相处，是任何团队都想要的人",
        "C+N_low": "压力下的执行者——你能在高压环境下保持条理和效率",
        "E+A": "人际关系大师——你既外向又体贴，社交网络广泛且深入",
        "E+N_low": "稳定的社交者——你享受社交但不会因此情绪波动",
        "A+N_low": "温和的稳定者——你既善解人意又情绪稳定，是优秀的支持者",
        "O+C+E": "全能型领导者——创意、执行、影响力三合一",
        "C+E+A": "理想的管理者——高效、外向、善于团队协作",
        "E+A+N_low": "天生的HR——善于社交、富有同理心、情绪稳定",
        // 新增：低分组合
        "O_low+C_high": "务实执行者——你专注于用验证过的方法把事情做好",
        "O_low+E_low": "稳健独行者——你在熟悉的环境中独立高效地工作",
        "E_low+A_high": "安静支持者——你在幕后默默关心和帮助他人",
        "E_low+C_high": "专注工匠——你能够长时间沉浸在需要精细操作的工作中",
        "A_low+C_high": "结果导向者——你专注于目标达成，不被人情世故分心",
        "N_high+O_high": "敏感艺术家——你的情感深度赋予创作独特的感染力",
        "N_high+A_high": "共情者——你能深刻理解他人的痛苦并提供支持",
        
        // 新增：对立组合
        "O_high+C_low": "自由创想家——你有无限创意但可能需要帮助落地",
        "E_high+N_high": "热情敏感者——你社交活跃但也容易受情绪影响",
        "A_high+N_high": "温柔敏感者——你善良体贴但可能过度担心他人看法"
    },

    // 人生建议
    lifeAdvice: {
        O: {
            high: "你的创造力是宝贵的资产，但要学会将想法转化为行动。建议：1）为每个创意设定具体的下一步行动；2）找一个务实的伙伴帮你落地；3）不要同时追逐太多想法，学会聚焦。",
            low: "稳定是你的优势，但世界在快速变化。建议：1）每季度尝试一件新事物；2）关注行业趋势，保持学习；3）在舒适区边缘小步尝试，逐渐扩大边界。"
        },
        C: {
            high: "你的自律让你走得很远，但不要忘记享受过程。建议：1）给自己安排「无目标」的休闲时间；2）学会区分「重要」和「紧急」；3）有时候「足够好」就是最好的。",
            low: "自由是你的天性，但一些结构会帮助你走得更远。建议：1）使用外部工具（日历、提醒）来弥补内在规划的不足；2）找到你真正在乎的目标，为它建立最小限度的计划；3）与高尽责性的人合作，互补优势。"
        },
        E: {
            high: "你的社交能力是超能力，但也要培养独处的能力。建议：1）每周安排独处反思时间；2）深化几段核心关系，而非只追求广度；3）学会在安静中也能感到舒适。",
            low: "你的内在世界丰富，但不要让它成为与世界隔绝的理由。建议：1）每月主动参加一次社交活动；2）找到适合你的社交方式（如小型聚会、一对一咖啡）；3）记住，社交技能是可以练习的。"
        },
        A: {
            high: "你的善良是美德，但不要让它成为负担。建议：1）学会说「不」，这不是自私；2）在帮助他人之前，先确保自己的需求得到满足；3）警惕那些只索取不付出的关系。",
            low: "你的独立是力量，但合作能让你走得更远。建议：1）在表达不同意见时，多考虑「怎么说」；2）尝试理解他人行为背后的原因；3）记住，建立信任需要时间和善意。"
        },
        N: {
            high: "你的敏感是天赋，不是诅咒。建议：1）建立情绪调节工具箱（运动、冥想、写作）；2）找到能够理解和支持你的人；3）学会区分「感受情绪」和「被情绪控制」；4）考虑寻求专业支持来发展情绪管理技能。",
            low: "你的稳定是锚，但不要忽视情绪的信号。建议：1）定期检视自己的内心状态；2）学会识别和表达情绪，即使是负面的；3）对情绪敏感的人多一些耐心和理解。"
        }
    },

    // 学习风格
    learningStyle: {
        O: {
            high: "你喜欢探索性学习，对新概念和理论感兴趣。建议通过阅读、讨论、实验来学习，避免过于结构化的课程。",
            low: "你喜欢实用性学习，关注「怎么做」而非「为什么」。建议通过案例、实践、步骤指南来学习。"
        },
        C: {
            high: "你喜欢系统性学习，会制定学习计划并坚持执行。建议设定明确目标，使用进度追踪工具。",
            low: "你喜欢灵活学习，可能会跳跃式地探索感兴趣的内容。建议找到内在动机，让学习变得有趣。"
        },
        E: {
            high: "你喜欢互动式学习，通过讨论和教授他人来加深理解。建议参加学习小组，找学习伙伴。",
            low: "你喜欢独立学习，在安静环境中效率最高。建议创造不被打扰的学习空间，使用自学资源。"
        },
        A: {
            high: "你喜欢协作学习，在团队项目中表现出色。建议参与小组作业，通过帮助他人来学习。",
            low: "你喜欢竞争性学习，排名和挑战能激发你的动力。建议设定挑战目标，与他人良性竞争。"
        },
        N: {
            high: "你的学习可能受情绪影响较大。建议在情绪好的时候学习难的内容，建立稳定的学习环境。",
            low: "你能够在各种状态下保持学习效率。建议利用这个优势，在他人可能受干扰时保持进度。"
        }
    },

    // 压力应对
    stressResponse: {
        O: {
            high: "压力下你可能会逃入幻想或过度思考。建议：回到当下，专注于一个具体的行动步骤。",
            low: "压力下你可能会变得更加保守和抗拒变化。建议：提醒自己，有时候新方法可能是解决问题的关键。"
        },
        C: {
            high: "压力下你可能会过度控制或变得更加完美主义。建议：接受「足够好」，优先处理最重要的事。",
            low: "压力下你可能会逃避或拖延。建议：把大任务分解成小步骤，从最简单的开始。"
        },
        E: {
            high: "压力下你可能会过度社交或寻求外部认可。建议：给自己一些独处时间来整理思绪。",
            low: "压力下你可能会过度退缩和孤立。建议：主动联系一两个信任的人，分享你的感受。"
        },
        A: {
            high: "压力下你可能会过度迎合或压抑自己的需求。建议：记住照顾自己不是自私，表达你的边界。",
            low: "压力下你可能会变得更加对抗或挑剔。建议：在反应之前暂停，考虑对方的立场。"
        },
        N: {
            high: "压力下你可能会情绪崩溃或过度焦虑。建议：使用呼吸练习、运动或其他调节技巧，必要时寻求支持。",
            low: "压力下你能保持冷静，但可能忽视问题的情感层面。建议：检查自己是否在压抑情绪，适当表达感受。"
        }
    },

    // 默认内容
    defaultStrengths: [
        "性格均衡，适应能力强",
        "能够在不同环境中保持稳定表现",
        "具有良好的自我调节能力",
        "在多种情境下都能找到自己的位置"
    ],
    
    defaultWeaknesses: [
        "可能缺乏特别突出的特质",
        "在需要极端特质的环境中可能不够突出",
        "建议找到并发展自己的独特优势"
    ],

    // 核心优势（用于结果页面）
    resultStrengths: {
        O: "富有创造力和想象力，善于接受新事物",
        C: "做事有条理，责任心强，值得信赖",
        E: "外向开朗，善于社交，充满活力",
        A: "善解人意，乐于助人，人际关系和谐",
        N_low: "情绪稳定，心态平和，抗压能力强"
    },

    // 潜在盲点（用于结果页面）
    resultWeaknesses: {
        O: "可能过于保守，不太愿意尝试新事物",
        C: "可能缺乏规划，做事不够细致",
        E: "可能在社交场合感到不自在，需要更多独处时间",
        A: "可能过于直接，在人际关系中需要更多圆融",
        N: "可能情绪波动较大，容易感到焦虑或压力"
    },


    // 名人参考（相似性格的成功人士）
    famousPersonalities: {
        O_high_C_high: "达芬奇型——创意与执行力兼备的全才",
        O_high_E_high: "乔布斯型——有远见且善于推销想法的创新者",
        C_high_A_high: "巴菲特型——可靠、耐心、重视长期关系",
        E_high_A_high: "奥普拉型——有影响力且富有同理心的沟通者",
        C_high_N_low: "默克尔型——冷静、务实、稳定的执行者",
        O_high_N_high: "梵高型——敏感的艺术家，创造力与情感深度并存",
        E_low_C_high: "比尔·盖茨型——内向但极度专注和自律",
        A_low_C_high: "马斯克型——独立思考、追求卓越、不惧争议"
    }
};

// ============================================
// 辅助函数
// ============================================

function getDescription(dim, score) {
    const info = DIMENSION_INFO[dim];
    if (score >= 60) return info.descriptions.high;
    if (score >= 40) return info.descriptions.medium;
    return info.descriptions.low;
}

function getCareer(dim, score) {
    const info = DIMENSION_INFO[dim];
    if (score >= 60) return info.career.high;
    if (score >= 40) return info.career.medium;
    return info.career.low;
}

function getLove(dim, score) {
    const info = DIMENSION_INFO[dim];
    if (score >= 60) return info.love.high;
    if (score >= 40) return info.love.medium;
    return info.love.low;
}

function getGrowth(dim, score) {
    const info = DIMENSION_INFO[dim];
    if (score >= 60) return info.growth.high;
    if (score >= 40) return info.growth.medium;
    return info.growth.low;
}

function getCommunication(dim, score) {
    const info = DIMENSION_INFO[dim];
    if (score >= 60) return info.communication.high;
    if (score >= 40) return info.communication.medium;
    return info.communication.low;
}

function getLevel(score) {
    if (score >= 70) return { text: '很高', class: 'level-very-high' };
    if (score >= 60) return { text: '偏高', class: 'level-high' };
    if (score >= 40) return { text: '中等', class: 'level-medium' };
    if (score >= 30) return { text: '偏低', class: 'level-low' };
    return { text: '很低', class: 'level-very-low' };
}

// 获取维度组合洞察
function getComboInsight(dim1, dim2) {
    const key1 = `${dim1}+${dim2}`;
    const key2 = `${dim2}+${dim1}`;
    return ANALYSIS_CONTENT.combos[key1] || ANALYSIS_CONTENT.combos[key2] || "独特的个性组合";
}

// 获取排序后的维度
function getSortedDimensions(scores) {
    return Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);
}

// 生成核心优势
function generateStrengths(scores) {
    const strengths = [];
    const sorted = getSortedDimensions(scores);
    
    // 根据高分维度添加优势
    sorted.forEach(dim => {
        const score = scores[dim];
        let key;
        if (dim === 'N') {
            key = score >= 60 ? 'N_high' : (score <= 40 ? 'N_low' : null);
        } else {
            key = score >= 60 ? `${dim}_high` : (score <= 40 ? `${dim}_low` : null);
        }
        
        if (key && ANALYSIS_CONTENT.strengths[key]) {
            const dimStrengths = ANALYSIS_CONTENT.strengths[key];
            // 随机选择1-2个优势
            const selected = dimStrengths.slice(0, Math.min(2, dimStrengths.length));
            strengths.push(...selected);
        }
    });
    
    if (strengths.length === 0) {
        return ANALYSIS_CONTENT.defaultStrengths.slice(0, 3);
    }
    
    return strengths.slice(0, 4);
}

// 生成潜在盲点
function generateWeaknesses(scores) {
    const weaknesses = [];
    const sorted = getSortedDimensions(scores).reverse(); // 从低到高
    
    sorted.forEach(dim => {
        const score = scores[dim];
        let key;
        if (dim === 'N') {
            key = score >= 60 ? 'N_high' : (score <= 40 ? 'N_low' : null);
        } else {
            key = score >= 60 ? `${dim}_high` : (score <= 40 ? `${dim}_low` : null);
        }
        
        if (key && ANALYSIS_CONTENT.weaknesses[key]) {
            const dimWeaknesses = ANALYSIS_CONTENT.weaknesses[key];
            weaknesses.push(dimWeaknesses[0]); // 每个维度取一个
        }
    });
    
    if (weaknesses.length === 0) {
        return ANALYSIS_CONTENT.defaultWeaknesses;
    }
    
    return weaknesses.slice(0, 3);
}

// 生成性格总结
function generateSummary(scores, highest, lowest) {
    const sorted = getSortedDimensions(scores);
    const secondHighest = sorted[1];
    
    // 随机选择一个模板
    const template = ANALYSIS_CONTENT.summaryTemplates[0];
    return template(scores, highest, lowest, secondHighest);
}

// 生成人生建议
function generateLifeAdvice(scores) {
    const advice = [];
    const sorted = getSortedDimensions(scores);
    
    // 取最高和最低的两个维度给建议
    const topTwo = sorted.slice(0, 2);
    const bottomTwo = sorted.slice(-2);
    
    topTwo.forEach(dim => {
        const score = scores[dim];
        const level = score >= 60 ? 'high' : 'low';
        if (ANALYSIS_CONTENT.lifeAdvice[dim] && ANALYSIS_CONTENT.lifeAdvice[dim][level]) {
            advice.push({
                dimension: DIMENSION_INFO[dim].name,
                content: ANALYSIS_CONTENT.lifeAdvice[dim][level]
            });
        }
    });
    
    return advice.slice(0, 3);
}

// 生成学习风格建议
function generateLearningStyle(scores) {
    const styles = [];
    
    Object.keys(scores).forEach(dim => {
        const score = scores[dim];
        const level = score >= 55 ? 'high' : 'low';
        if (ANALYSIS_CONTENT.learningStyle[dim] && ANALYSIS_CONTENT.learningStyle[dim][level]) {
            if (score >= 60 || score <= 40) { // 只有明显倾向时才添加
                styles.push(ANALYSIS_CONTENT.learningStyle[dim][level]);
            }
        }
    });
    
    return styles.slice(0, 3);
}

// 生成压力应对建议
function generateStressAdvice(scores) {
    const advice = [];
    
    // 找出最极端的维度
    Object.keys(scores).forEach(dim => {
        const score = scores[dim];
        if (score >= 65 || score <= 35) {
            const level = score >= 65 ? 'high' : 'low';
            if (ANALYSIS_CONTENT.stressResponse[dim] && ANALYSIS_CONTENT.stressResponse[dim][level]) {
                advice.push({
                    dimension: DIMENSION_INFO[dim].name,
                    content: ANALYSIS_CONTENT.stressResponse[dim][level]
                });
            }
        }
    });
    
    return advice.slice(0, 3);
}

// 获取名人参考
function getFamousPersonality(scores) {
    const sorted = getSortedDimensions(scores);
    const top1 = sorted[0];
    const top2 = sorted[1];
    
    const score1 = scores[top1];
    const score2 = scores[top2];
    
    // 构建可能的键
    const possibleKeys = [
        `${top1}_high_${top2}_high`,
        `${top2}_high_${top1}_high`,
        `${top1}_high_${top2}_low`,
        `${top1}_low_${top2}_high`
    ];
    
    for (const key of possibleKeys) {
        if (ANALYSIS_CONTENT.famousPersonalities[key]) {
            return ANALYSIS_CONTENT.famousPersonalities[key];
        }
    }
    
    return "独特的个性组合，走自己的路";
}

// 生成完整的分析报告
function generateFullReport(scores) {
    const sorted = getSortedDimensions(scores);
    const highest = sorted[0];
    const lowest = sorted[sorted.length - 1];
    
    return {
        summary: generateSummary(scores, highest, lowest),
        strengths: generateStrengths(scores),
        weaknesses: generateWeaknesses(scores),
        lifeAdvice: generateLifeAdvice(scores),
        learningStyle: generateLearningStyle(scores),
        stressAdvice: generateStressAdvice(scores),
        famousPersonality: getFamousPersonality(scores),
        dimensionDetails: sorted.map(dim => ({
            dimension: dim,
            name: DIMENSION_INFO[dim].name,
            score: scores[dim],
            level: getLevel(scores[dim]),
            description: getDescription(dim, scores[dim]),
            career: getCareer(dim, scores[dim]),
            love: getLove(dim, scores[dim]),
            growth: getGrowth(dim, scores[dim]),
            communication: getCommunication(dim, scores[dim])
        }))
    };
}

// 导出数据（用于模块化环境）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        QUESTIONS,
        DIMENSION_INFO,
        ANALYSIS_CONTENT,
        getDescription,
        getCareer,
        getLove,
        getGrowth,
        getCommunication,
        getLevel,
        getComboInsight,
        getSortedDimensions,
        generateStrengths,
        generateWeaknesses,
        generateSummary,
        generateLifeAdvice,
        generateLearningStyle,
        generateStressAdvice,
        getFamousPersonality,
        generateFullReport
    };
}