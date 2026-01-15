export type IeltsWord = {
  word: string;
  phonetic: string;
  definition: string;
  chinese_definition: string;
  synonyms: Array<{ word: string; translation: string }>;
  collocations: Array<{ phrase: string; translation: string }>;
  example_sentence: string;
  example_translation: string;
  status: 'unlearned' | 'learning' | 'reviewing' | 'mastered';
};

export const ieltsWordsData: IeltsWord[] = [
  // ==================== BATCH 1 (1-50) ====================
  // Academic Nouns
  {
    word: "abundant",
    phonetic: "/əˈbʌndənt/",
    definition: "existing or available in large quantities; plentiful",
    chinese_definition: "大量的；丰富的；充裕的",
    synonyms: [
      { word: "plentiful", translation: "丰富的" },
      { word: "ample", translation: "充足的" },
      { word: "copious", translation: "大量的" }
    ],
    collocations: [
      { phrase: "abundant resources", translation: "丰富的资源" },
      { phrase: "abundant evidence", translation: "充足的证据" },
      { phrase: "abundant supply", translation: "充足的供应" }
    ],
    example_sentence: "The region has abundant natural resources.",
    example_translation: "该地区拥有丰富的自然资源。",
    status: "unlearned"
  },
  {
    word: "biodiversity",
    phonetic: "/ˌbaɪəʊdaɪˈvɜːsəti/",
    definition: "the variety of plant and animal life in the world or in a particular habitat",
    chinese_definition: "生物多样性",
    synonyms: [
      { word: "ecological variety", translation: "生态多样性" },
      { word: "biological diversity", translation: "生物多样性" }
    ],
    collocations: [
      { phrase: "biodiversity loss", translation: "生物多样性丧失" },
      { phrase: "biodiversity hotspot", translation: "生物多样性热点" },
      { phrase: "preserve biodiversity", translation: "保护生物多样性" }
    ],
    example_sentence: "The island is known for its rich biodiversity.",
    example_translation: "这个岛屿以其丰富的生物多样性而闻名。",
    status: "unlearned"
  },
  {
    word: "curriculum",
    phonetic: "/kəˈrɪkjələm/",
    definition: "the subjects comprising a course of study in a school or college",
    chinese_definition: "课程；课程体系",
    synonyms: [
      { word: "syllabus", translation: "教学大纲" },
      { word: "coursework", translation: "课程作业" }
    ],
    collocations: [
      { phrase: "curriculum design", translation: "课程设计" },
      { phrase: "national curriculum", translation: "国家课程" },
      { phrase: "core curriculum", translation: "核心课程" }
    ],
    example_sentence: "The school has updated its curriculum to include more technology classes.",
    example_translation: "学校更新了课程体系，增加了更多技术课程。",
    status: "unlearned"
  },
  {
    word: "consensus",
    phonetic: "/kənˈsensəs/",
    definition: "a general agreement among a group of people",
    chinese_definition: "共识；一致意见",
    synonyms: [
      { word: "unanimity", translation: "一致" },
      { word: "agreement", translation: "协议" },
      { word: "accord", translation: "协定" }
    ],
    collocations: [
      { phrase: "reach a consensus", translation: "达成共识" },
      { phrase: "build consensus", translation: "建立共识" },
      { phrase: "broad consensus", translation: "广泛共识" }
    ],
    example_sentence: "The committee reached a consensus on the new policy.",
    example_translation: "委员会就新政策达成了共识。",
    status: "unlearned"
  },
  {
    word: "controversy",
    phonetic: "/ˈkɒntrəvɜːsi/",
    definition: "public disagreement about something",
    chinese_definition: "争议；争论",
    synonyms: [
      { word: "debate", translation: "辩论" },
      { word: "dispute", translation: "争端" },
      { word: "contention", translation: "争执" }
    ],
    collocations: [
      { phrase: "spark controversy", translation: "引发争议" },
      { phrase: "avoid controversy", translation: "避免争议" },
      { phrase: "political controversy", translation: "政治争议" }
    ],
    example_sentence: "The decision sparked a controversy among environmentalists.",
    example_translation: "这个决定在环保人士中引发了争议。",
    status: "unlearned"
  },
  // Academic Adjectives
  {
    word: "contemporary",
    phonetic: "/kənˈtemprəri/",
    definition: "living or occurring at the same time; belonging to the present time",
    chinese_definition: "当代的；同时代的",
    synonyms: [
      { word: "modern", translation: "现代的" },
      { word: "current", translation: "当前的" },
      { word: "present-day", translation: "现今的" }
    ],
    collocations: [
      { phrase: "contemporary society", translation: "当代社会" },
      { phrase: "contemporary art", translation: "当代艺术" },
      { phrase: "contemporary issues", translation: "当代问题" }
    ],
    example_sentence: "Contemporary art often challenges traditional methods.",
    example_translation: "当代艺术经常挑战传统方法。",
    status: "unlearned"
  },
  {
    word: "crucial",
    phonetic: "/ˈkruːʃl/",
    definition: "decisive or critical, especially in the success or failure of something",
    chinese_definition: "至关重要的；决定性的",
    synonyms: [
      { word: "critical", translation: "关键的" },
      { word: "vital", translation: "重要的" },
      { word: "essential", translation: "本质的" }
    ],
    collocations: [
      { phrase: "crucial role", translation: "至关重要的作用" },
      { phrase: "crucial factor", translation: "关键因素" },
      { phrase: "crucial importance", translation: "至关重要" }
    ],
    example_sentence: "Communication plays a crucial role in building relationships.",
    example_translation: "沟通在建立关系中起着至关重要的作用。",
    status: "unlearned"
  },
  {
    word: "comprehensive",
    phonetic: "/ˌkɒmprɪˈhensɪv/",
    definition: "complete; including all or nearly all elements or aspects",
    chinese_definition: "全面的；综合的",
    synonyms: [
      { word: "thorough", translation: "彻底的" },
      { word: "extensive", translation: "广泛的" },
      { word: "all-inclusive", translation: "包罗万象的" }
    ],
    collocations: [
      { phrase: "comprehensive review", translation: "全面审查" },
      { phrase: "comprehensive study", translation: "全面研究" },
      { phrase: "comprehensive analysis", translation: "全面分析" }
    ],
    example_sentence: "The report provides a comprehensive analysis of the problem.",
    example_translation: "这份报告对问题进行了全面的分析。",
    status: "unlearned"
  },
  // Academic Verbs
  {
    word: "deteriorate",
    phonetic: "/dɪˈtɪəriəreɪt/",
    definition: "become progressively worse",
    chinese_definition: "恶化；变坏；退化",
    synonyms: [
      { word: "worsen", translation: "恶化" },
      { word: "decline", translation: "衰退" },
      { word: "degrade", translation: "降级" }
    ],
    collocations: [
      { phrase: "deteriorate rapidly", translation: "迅速恶化" },
      { phrase: "deteriorate further", translation: "进一步恶化" },
      { phrase: "health deteriorate", translation: "健康状况恶化" }
    ],
    example_sentence: "The patient's condition began to deteriorate rapidly.",
    example_translation: "病人的状况开始迅速恶化。",
    status: "unlearned"
  },
  {
    word: "demonstrate",
    phonetic: "/ˈdemənstreɪt/",
    definition: "show or prove something clearly; give a practical exhibition",
    chinese_definition: "证明；示范；展示",
    synonyms: [
      { word: "show", translation: "展示" },
      { word: "prove", translation: "证明" },
      { word: "illustrate", translation: "说明" }
    ],
    collocations: [
      { phrase: "demonstrate ability", translation: "展示能力" },
      { phrase: "demonstrate knowledge", translation: "展示知识" },
      { phrase: "clearly demonstrate", translation: "清楚地证明" }
    ],
    example_sentence: "The study demonstrates the link between diet and health.",
    example_translation: "研究表明饮食与健康之间存在联系。",
    status: "unlearned"
  },
  {
    word: "facilitate",
    phonetic: "/fəˈsɪlɪteɪt/",
    definition: "make an action or process easier",
    chinese_definition: "促进；使便利；帮助",
    synonyms: [
      { word: "enable", translation: "使能够" },
      { word: "assist", translation: "协助" },
      { word: "ease", translation: "减轻" }
    ],
    collocations: [
      { phrase: "facilitate learning", translation: "促进学习" },
      { phrase: "facilitate communication", translation: "促进沟通" },
      { phrase: "facilitate trade", translation: "促进贸易" }
    ],
    example_sentence: "Technology can facilitate communication between distant teams.",
    example_translation: "技术可以促进远距离团队之间的沟通。",
    status: "unlearned"
  },
  // More Academic Nouns
  {
    word: "ecosystem",
    phonetic: "/ˈiːkəʊsɪstəm/",
    definition: "a biological community of interacting organisms and their physical environment",
    chinese_definition: "生态系统",
    synonyms: [
      { word: "biome", translation: "生物群落" },
      { word: "environment", translation: "环境" },
      { word: "habitat", translation: "栖息地" }
    ],
    collocations: [
      { phrase: "marine ecosystem", translation: "海洋生态系统" },
      { phrase: "natural ecosystem", translation: "自然生态系统" },
      { phrase: "balance of ecosystem", translation: "生态平衡" }
    ],
    example_sentence: "The delicate balance of this ecosystem is easily disrupted.",
    example_translation: "这个生态系统微妙的平衡很容易被打破。",
    status: "unlearned"
  },
  {
    word: "enhancement",
    phonetic: "/ɪnˈhænsmənt/",
    definition: "the improvement or augmentation of something",
    chinese_definition: "增强；提高；改善",
    synonyms: [
      { word: "improvement", translation: "改进" },
      { word: "augmentation", translation: "增强" },
      { word: "upgrade", translation: "升级" }
    ],
    collocations: [
      { phrase: "performance enhancement", translation: "性能增强" },
      { phrase: "skill enhancement", translation: "技能提升" },
      { phrase: "significant enhancement", translation: "显著增强" }
    ],
    example_sentence: "The new software includes several security enhancements.",
    example_translation: "新软件包含多项安全增强功能。",
    status: "unlearned"
  },
  {
    word: "hypothesis",
    phonetic: "/haɪˈpɒθəsɪs/",
    definition: "a supposition or proposed explanation made on the basis of limited evidence",
    chinese_definition: "假设；假说",
    synonyms: [
      { word: "theory", translation: "理论" },
      { word: "assumption", translation: "假设" },
      { word: "premise", translation: "前提" }
    ],
    collocations: [
      { phrase: "test a hypothesis", translation: "验证假设" },
      { phrase: "support the hypothesis", translation: "支持假设" },
      { phrase: "working hypothesis", translation: "工作假设" }
    ],
    example_sentence: "The scientist developed a new hypothesis to explain the phenomenon.",
    example_translation: "科学家提出了一个新的假设来解释这一现象。",
    status: "unlearned"
  },
  {
    word: "innovation",
    phonetic: "/ˌɪnəˈveɪʃn/",
    definition: "the action or process of innovating; a new method, idea, product, etc.",
    chinese_definition: "创新；革新",
    synonyms: [
      { word: "invention", translation: "发明" },
      { word: "creativity", translation: "创造力" },
      { word: "novelty", translation: "新颖性" }
    ],
    collocations: [
      { phrase: "technological innovation", translation: "技术创新" },
      { phrase: "drive innovation", translation: "推动创新" },
      { phrase: "foster innovation", translation: "促进创新" }
    ],
    example_sentence: "Innovation is key to staying competitive in today's market.",
    example_translation: "创新是在当今市场上保持竞争力的关键。",
    status: "unlearned"
  },
  // General Adjectives
  {
    word: "feasible",
    phonetic: "/ˈfiːzəbl/",
    definition: "possible to do easily or conveniently",
    chinese_definition: "可行的；可能的；可实行的",
    synonyms: [
      { word: "viable", translation: "可行的" },
      { word: "practical", translation: "实际的" },
      { word: "achievable", translation: "可实现的" }
    ],
    collocations: [
      { phrase: "feasible plan", translation: "可行的计划" },
      { phrase: "feasible solution", translation: "可行的解决方案" },
      { phrase: "technically feasible", translation: "技术上可行" }
    ],
    example_sentence: "The plan is technically feasible but too expensive.",
    example_translation: "这个计划在技术上是可行的，但成本太高。",
    status: "unlearned"
  },
  {
    word: "genuine",
    phonetic: "/ˈdʒenjuɪn/",
    definition: "truly what something is said to be; authentic",
    chinese_definition: "真实的；真正的；真诚的",
    synonyms: [
      { word: "authentic", translation: "真实的" },
      { word: "real", translation: "真正的" },
      { word: "legitimate", translation: "合法的" }
    ],
    collocations: [
      { phrase: "genuine concern", translation: "真诚的关心" },
      { phrase: "genuine interest", translation: "真正的兴趣" },
      { phrase: "genuine effort", translation: "真诚的努力" }
    ],
    example_sentence: "Her genuine passion for teaching inspires her students.",
    example_translation: "她对教学真正的热情激励着她的学生。",
    status: "unlearned"
  },
  {
    word: "implement",
    phonetic: "/ˈɪmplɪment/",
    definition: "put a decision, plan, agreement, etc., into effect",
    chinese_definition: "实施；执行；贯彻",
    synonyms: [
      { word: "execute", translation: "执行" },
      { word: "carry out", translation: "开展" },
      { word: "apply", translation: "应用" }
    ],
    collocations: [
      { phrase: "implement policy", translation: "实施政策" },
      { phrase: "implement changes", translation: "实施变更" },
      { phrase: "implement strategy", translation: "实施策略" }
    ],
    example_sentence: "The government plans to implement new tax reforms.",
    example_translation: "政府计划实施新的税收改革。",
    status: "unlearned"
  },
  {
    word: "initiate",
    phonetic: "/ɪˈnɪʃieɪt/",
    definition: "cause a process or action to begin",
    chinese_definition: "开始；发起；创始",
    synonyms: [
      { word: "start", translation: "开始" },
      { word: "launch", translation: "启动" },
      { word: "commence", translation: "着手" }
    ],
    collocations: [
      { phrase: "initiate process", translation: "启动流程" },
      { phrase: "initiate action", translation: "发起行动" },
      { phrase: "initiate program", translation: "启动项目" }
    ],
    example_sentence: "The company initiated a new recycling program.",
    example_translation: "公司启动了一项新的回收计划。",
    status: "unlearned"
  },
  {
    word: "maintain",
    phonetic: "/meɪnˈteɪn/",
    definition: "cause or enable a condition to continue",
    chinese_definition: "维持；保持；维修",
    synonyms: [
      { word: "sustain", translation: "维持" },
      { word: "preserve", translation: "保持" },
      { word: "uphold", translation: "支持" }
    ],
    collocations: [
      { phrase: "maintain standards", translation: "维持标准" },
      { phrase: "maintain relationship", translation: "维持关系" },
      { phrase: "maintain balance", translation: "保持平衡" }
    ],
    example_sentence: "It's important to maintain a healthy work-life balance.",
    example_translation: "保持健康的工作与生活平衡很重要。",
    status: "unlearned"
  },
  // Complex Words
  {
    word: "juxtapose",
    phonetic: "/ˌdʒʌkstəˈpəʊz/",
    definition: "place or deal with close together for contrasting effect",
    chinese_definition: "把...并列；把...放在...旁边",
    synonyms: [
      { word: "place side by side", translation: "并排放置" },
      { word: "contrast", translation: "对比" }
    ],
    collocations: [
      { phrase: "juxtapose images", translation: "并列图像" },
      { phrase: "juxtapose ideas", translation: "并列观点" },
      { phrase: "cleverly juxtapose", translation: "巧妙地并列" }
    ],
    example_sentence: "The exhibition juxtaposes classical and modern artworks.",
    example_translation: "展览将古典和现代艺术品并列展示。",
    status: "unlearned"
  },
  {
    word: "knowledgeable",
    phonetic: "/ˈnɒlɪdʒəbl/",
    definition: "intelligent and well informed",
    chinese_definition: "博学的；有见识的；消息灵通的",
    synonyms: [
      { word: "well-informed", translation: "见多识广的" },
      { word: "educated", translation: "受过教育的" },
      { word: "learned", translation: "有学问的" }
    ],
    collocations: [
      { phrase: "knowledgeable staff", translation: "博学的工作人员" },
      { phrase: "knowledgeable about", translation: "对...有见识" },
      { phrase: "highly knowledgeable", translation: "非常有见识" }
    ],
    example_sentence: "She is a knowledgeable guide on local history.",
    example_translation: "她是当地历史方面的博学向导。",
    status: "unlearned"
  },
  {
    word: "longevity",
    phonetic: "/lɒnˈdʒevəti/",
    definition: "long life; the fact of lasting a long time",
    chinese_definition: "长寿；长久；持久",
    synonyms: [
      { word: "durability", translation: "耐久性" },
      { word: "endurance", translation: "耐力" },
      { word: "lifespan", translation: "寿命" }
    ],
    collocations: [
      { phrase: "human longevity", translation: "人类长寿" },
      { phrase: "increase longevity", translation: "增加寿命" },
      { phrase: "remarkable longevity", translation: "非凡的长寿" }
    ],
    example_sentence: "Regular exercise contributes to human longevity.",
    example_translation: "规律运动有助于人类长寿。",
    status: "unlearned"
  },
  {
    word: "mitigate",
    phonetic: "/ˈmɪtɪɡeɪt/",
    definition: "make less severe, serious, or painful",
    chinese_definition: "减轻；缓和；缓解",
    synonyms: [
      { word: "alleviate", translation: "减轻" },
      { word: "reduce", translation: "减少" },
      { word: "lessen", translation: "缓解" }
    ],
    collocations: [
      { phrase: "mitigate risk", translation: "降低风险" },
      { phrase: "mitigate impact", translation: "减轻影响" },
      { phrase: "mitigate effects", translation: "缓解效果" }
    ],
    example_sentence: "New measures are being taken to mitigate traffic congestion.",
    example_translation: "正在采取新措施来缓解交通拥堵。",
    status: "unlearned"
  },
  {
    word: "noteworthy",
    phonetic: "/ˈnəʊtwɜːði/",
    definition: "interesting or significant enough to deserve attention",
    chinese_definition: "值得注意的；显著的",
    synonyms: [
      { word: "notable", translation: "显著的" },
      { word: "remarkable", translation: "非凡的" },
      { word: "significant", translation: "重要的" }
    ],
    collocations: [
      { phrase: "noteworthy achievement", translation: "值得注意的成就" },
      { phrase: "noteworthy feature", translation: "显著特征" },
      { phrase: "particularly noteworthy", translation: "特别值得注意" }
    ],
    example_sentence: "The project achieved several noteworthy accomplishments.",
    example_translation: "该项目取得了几项值得注意的成就。",
    status: "unlearned"
  },
  {
    word: "obstacle",
    phonetic: "/ˈɒbstəkl/",
    definition: "something that blocks one's way or hinders progress",
    chinese_definition: "障碍；阻碍；妨碍",
    synonyms: [
      { word: "barrier", translation: "障碍" },
      { word: "hindrance", translation: "妨碍" },
      { word: "impediment", translation: "阻碍" }
    ],
    collocations: [
      { phrase: "overcome obstacle", translation: "克服障碍" },
      { phrase: "major obstacle", translation: "主要障碍" },
      { phrase: "face obstacle", translation: "面临障碍" }
    ],
    example_sentence: "Lack of funding was the main obstacle to the project.",
    example_translation: "资金不足是该项目的主要障碍。",
    status: "unlearned"
  },
  {
    word: "paradigm",
    phonetic: "/ˈpærədaɪm/",
    definition: "a typical example or pattern of something; a model",
    chinese_definition: "范例；典范；思维模式",
    synonyms: [
      { word: "model", translation: "模型" },
      { word: "pattern", translation: "模式" },
      { word: "framework", translation: "框架" }
    ],
    collocations: [
      { phrase: "paradigm shift", translation: "范式转变" },
      { phrase: "new paradigm", translation: "新范式" },
      { phrase: "dominant paradigm", translation: "主导范式" }
    ],
    example_sentence: "The new theory represents a paradigm shift in physics.",
    example_translation: "新理论代表了物理学的一次范式转变。",
    status: "unlearned"
  },
  {
    word: "precedent",
    phonetic: "/ˈpresɪdənt/",
    definition: "an earlier event or action regarded as an example or guide",
    chinese_definition: "先例；惯例",
    synonyms: [
      { word: "example", translation: "例子" },
      { word: "model", translation: "模范" },
      { word: "tradition", translation: "传统" }
    ],
    collocations: [
      { phrase: "set a precedent", translation: "树立先例" },
      { phrase: "legal precedent", translation: "法律先例" },
      { phrase: "historical precedent", translation: "历史先例" }
    ],
    example_sentence: "This ruling sets an important precedent for future cases.",
    example_translation: "这项裁决为未来的案件确立了一个重要的先例。",
    status: "unlearned"
  },
  {
    word: "profound",
    phonetic: "/prəˈfaʊnd/",
    definition: "very great or intense; having deep meaning or far-reaching effects",
    chinese_definition: "深刻的；深远的；渊博的",
    synonyms: [
      { word: "deep", translation: "深的" },
      { word: "significant", translation: "重大的" },
      { word: "far-reaching", translation: "深远的" }
    ],
    collocations: [
      { phrase: "profound impact", translation: "深远影响" },
      { phrase: "profound effect", translation: "深刻效果" },
      { phrase: "profound influence", translation: "深刻影响" }
    ],
    example_sentence: "The book had a profound influence on her thinking.",
    example_translation: "这本书对她的思维产生了深远的影响。",
    status: "unlearned"
  },
  {
    word: "quantitative",
    phonetic: "/ˈkwɒntɪtətɪv/",
    definition: "relating to, measuring, or measured by the quantity of something",
    chinese_definition: "定量的；数量的",
    synonyms: [
      { word: "numerical", translation: "数字的" },
      { word: "measurable", translation: "可测量的" },
      { word: "statistical", translation: "统计的" }
    ],
    collocations: [
      { phrase: "quantitative analysis", translation: "定量分析" },
      { phrase: "quantitative data", translation: "定量数据" },
      { phrase: "quantitative research", translation: "定量研究" }
    ],
    example_sentence: "The study uses both quantitative and qualitative methods.",
    example_translation: "这项研究同时使用了定量和定性方法。",
    status: "unlearned"
  },
  {
    word: "qualitative",
    phonetic: "/ˈkwɒlɪtətɪv/",
    definition: "relating to, measuring, or measured by the quality of something",
    chinese_definition: "定性的；质量上的",
    synonyms: [
      { word: "subjective", translation: "主观的" },
      { word: "descriptive", translation: "描述性的" },
      { word: "quality-based", translation: "基于质量的" }
    ],
    collocations: [
      { phrase: "qualitative analysis", translation: "定性分析" },
      { phrase: "qualitative research", translation: "定性研究" },
      { phrase: "qualitative data", translation: "定性数据" }
    ],
    example_sentence: "The study focuses on qualitative research methods.",
    example_translation: "这项研究专注于定性研究方法。",
    status: "unlearned"
  },
  {
    word: "resilient",
    phonetic: "/rɪˈzɪliənt/",
    definition: "able to recover quickly from difficult conditions",
    chinese_definition: "有弹性的；能迅速恢复的；适应力强的",
    synonyms: [
      { word: "tough", translation: "坚韧的" },
      { word: "flexible", translation: "灵活的" },
      { word: "adaptable", translation: "适应力强的" }
    ],
    collocations: [
      { phrase: "resilient economy", translation: "有韧性的经济" },
      { phrase: "resilient system", translation: "有韧性的系统" },
      { phrase: "highly resilient", translation: "非常有韧性" }
    ],
    example_sentence: "Children are often more resilient than adults expect.",
    example_translation: "孩子们往往比成年人预期的更有韧性。",
    status: "unlearned"
  },
  {
    word: "sustainable",
    phonetic: "/səˈsteɪnəbl/",
    definition: "able to be maintained at a certain rate or level",
    chinese_definition: "可持续的；可维持的",
    synonyms: [
      { word: "environmentally friendly", translation: "环保的" },
      { word: "renewable", translation: "可再生的" },
      { word: "lasting", translation: "持久的" }
    ],
    collocations: [
      { phrase: "sustainable development", translation: "可持续发展" },
      { phrase: "sustainable energy", translation: "可持续能源" },
      { phrase: "sustainable future", translation: "可持续未来" }
    ],
    example_sentence: "We need to develop more sustainable energy solutions.",
    example_translation: "我们需要开发更多可持续的能源解决方案。",
    status: "unlearned"
  },
  {
    word: "speculate",
    phonetic: "/ˈspekjʊleɪt/",
    definition: "form a theory or conjecture about a subject without firm evidence",
    chinese_definition: "推测；猜测；投机",
    synonyms: [
      { word: "theorize", translation: "理论化" },
      { word: "guess", translation: "猜测" },
      { word: "hypothesize", translation: "假设" }
    ],
    collocations: [
      { phrase: "speculate about", translation: "推测关于" },
      { phrase: "speculate on", translation: "猜测关于" },
      { phrase: "widely speculate", translation: "广泛推测" }
    ],
    example_sentence: "Scientists speculate that climate change may intensify storms.",
    example_translation: "科学家推测气候变化可能会加剧风暴。",
    status: "unlearned"
  },
  {
    word: "tangible",
    phonetic: "/ˈtændʒəbl/",
    definition: "perceptible by touch; clear and definite; real",
    chinese_definition: "有形的；可触摸的；实质的",
    synonyms: [
      { word: "concrete", translation: "具体的" },
      { word: "real", translation: "真实的" },
      { word: "physical", translation: "物理的" }
    ],
    collocations: [
      { phrase: "tangible evidence", translation: "确凿证据" },
      { phrase: "tangible benefit", translation: "实质效益" },
      { phrase: "tangible result", translation: "切实成果" }
    ],
    example_sentence: "The benefits of the policy are already tangible.",
    example_translation: "这项政策的效益已经显现。",
    status: "unlearned"
  },
  {
    word: "ubiquitous",
    phonetic: "/juːˈbɪkwɪtəs/",
    definition: "present, appearing, or found everywhere",
    chinese_definition: "无处不在的；普遍存在的",
    synonyms: [
      { word: "omnipresent", translation: "无处不在的" },
      { word: "pervasive", translation: "普遍存在的" },
      { word: "universal", translation: "普遍的" }
    ],
    collocations: [
      { phrase: "ubiquitous technology", translation: "无处不在的技术" },
      { phrase: "ubiquitous computing", translation: "普适计算" },
      { phrase: "increasingly ubiquitous", translation: "日益普遍" }
    ],
    example_sentence: "Smartphones have become ubiquitous in modern society.",
    example_translation: "智能手机在现代社会已无处不在。",
    status: "unlearned"
  },
  {
    word: "versatile",
    phonetic: "/ˈvɜːsətaɪl/",
    definition: "able to adapt or be adapted to many different functions or activities",
    chinese_definition: "多才多艺的；多功能的；通用的",
    synonyms: [
      { word: "adaptable", translation: "适应性强" },
      { word: "flexible", translation: "灵活的" },
      { word: "multi-skilled", translation: "多技能的" }
    ],
    collocations: [
      { phrase: "versatile tool", translation: "多功能工具" },
      { phrase: "versatile material", translation: "多功能材料" },
      { phrase: "highly versatile", translation: "高度通用" }
    ],
    example_sentence: "This tool is versatile enough for various applications.",
    example_translation: "这个工具足够多功能，适用于各种应用。",
    status: "unlearned"
  },
  {
    word: "viable",
    phonetic: "/ˈvaɪəbl/",
    definition: "capable of working successfully; feasible",
    chinese_definition: "可行的；有生存能力的",
    synonyms: [
      { word: "feasible", translation: "可行的" },
      { word: "practical", translation: "实际的" },
      { word: "workable", translation: "可操作的" }
    ],
    collocations: [
      { phrase: "viable option", translation: "可行选项" },
      { phrase: "viable solution", translation: "可行解决方案" },
      { phrase: "economically viable", translation: "经济上可行" }
    ],
    example_sentence: "The company needs a viable business model to survive.",
    example_translation: "公司需要可行的商业模式才能生存。",
    status: "unlearned"
  },
  {
    word: "widespread",
    phonetic: "/ˈwaɪdspred/",
    definition: "found or distributed over a large area or number of people",
    chinese_definition: "广泛的；普遍的；分布广的",
    synonyms: [
      { word: "common", translation: "常见的" },
      { word: "prevalent", translation: "流行的" },
      { word: "extensive", translation: "广泛的" }
    ],
    collocations: [
      { phrase: "widespread use", translation: "广泛使用" },
      { phrase: "widespread adoption", translation: "广泛采用" },
      { phrase: "widespread belief", translation: "广泛信仰" }
    ],
    example_sentence: "The widespread use of the internet has changed communication.",
    example_translation: "互联网的广泛使用改变了沟通方式。",
    status: "unlearned"
  },
  {
    word: "yield",
    phonetic: "/jiːld/",
    definition: "produce or provide; give way to arguments, demands, or pressure",
    chinese_definition: "产生；出产；屈服",
    synonyms: [
      { word: "produce", translation: "生产" },
      { word: "generate", translation: "产生" },
      { word: "surrender", translation: "屈服" }
    ],
    collocations: [
      { phrase: "yield results", translation: "产生结果" },
      { phrase: "yield profit", translation: "产生利润" },
      { phrase: "high yield", translation: "高产" }
    ],
    example_sentence: "The investment yielded significant returns.",
    example_translation: "这项投资产生了显著的回报。",
    status: "unlearned"
  },
  {
    word: "zealous",
    phonetic: "/ˈzeləs/",
    definition: "having or showing zeal; enthusiastic",
    chinese_definition: "热情的；热烈的；狂热的",
    synonyms: [
      { word: "enthusiastic", translation: "热情的" },
      { word: "passionate", translation: "充满激情的" },
      { word: "fervent", translation: "热烈的" }
    ],
    collocations: [
      { phrase: "zealous supporter", translation: "热情的支持者" },
      { phrase: "zealous advocate", translation: "热情的倡导者" },
      { phrase: "zealous pursuit", translation: "热情的追求" }
    ],
    example_sentence: "He is a zealous supporter of environmental causes.",
    example_translation: "他是环保事业的热情支持者。",
    status: "unlearned"
  },
  {
    word: "acquire",
    phonetic: "/əˈkwaɪər/",
    definition: "get or gain something through effort or experience",
    chinese_definition: "获得；取得；学到",
    synonyms: [
      { word: "obtain", translation: "获得" },
      { word: "gain", translation: "获得" },
      { word: "attain", translation: "达成" }
    ],
    collocations: [
      { phrase: "acquire knowledge", translation: "获得知识" },
      { phrase: "acquire skills", translation: "习得技能" },
      { phrase: "acquire language", translation: "学习语言" }
    ],
    example_sentence: "Students acquire valuable skills through internships.",
    example_translation: "学生通过实习获得宝贵的技能。",
    status: "unlearned"
  },
  {
    word: "bias",
    phonetic: "/ˈbaɪəs/",
    definition: "prejudice in favor of or against one thing, person, or group",
    chinese_definition: "偏见；偏向",
    synonyms: [
      { word: "prejudice", translation: "偏见" },
      { word: "partiality", translation: "偏心" },
      { word: "preconception", translation: "成见" }
    ],
    collocations: [
      { phrase: "cognitive bias", translation: "认知偏见" },
      { phrase: "reduce bias", translation: "减少偏见" },
      { phrase: "avoid bias", translation: "避免偏见" }
    ],
    example_sentence: "Researchers must be aware of potential bias in their studies.",
    example_translation: "研究人员必须意识到研究中可能存在的偏见。",
    status: "unlearned"
  },
  // ==================== BATCH 2 (51-100) ====================
  {
    word: "accommodate",
    phonetic: "/əˈkɒmədeɪt/",
    definition: "provide lodging or sufficient space for",
    chinese_definition: "容纳；使适应；提供住宿",
    synonyms: [
      { word: "house", translation: "安置" },
      { word: "adapt", translation: "适应" },
      { word: "fit", translation: "适合" }
    ],
    collocations: [
      { phrase: "accommodate needs", translation: "满足需求" },
      { phrase: "accommodate guests", translation: "款待客人" },
      { phrase: "fully accommodate", translation: "完全容纳" }
    ],
    example_sentence: "The hotel can accommodate up to 500 guests.",
    example_translation: "这家酒店最多可容纳500位客人。",
    status: "unlearned"
  },
  {
    word: "accumulate",
    phonetic: "/əˈkjuːmjʊleɪt/",
    definition: "gather together or collect over time",
    chinese_definition: "积累；积聚；堆积",
    synonyms: [
      { word: "collect", translation: "收集" },
      { word: "gather", translation: "聚集" },
      { word: "amass", translation: "聚集" }
    ],
    collocations: [
      { phrase: "accumulate wealth", translation: "积累财富" },
      { phrase: "accumulate knowledge", translation: "积累知识" },
      { phrase: "accumulate evidence", translation: "收集证据" }
    ],
    example_sentence: "She has accumulated a large amount of experience.",
    example_translation: "她积累了大量的经验。",
    status: "unlearned"
  },
  {
    word: "acknowledge",
    phonetic: "/əkˈnɒlɪdʒ/",
    definition: "accept or admit the existence or truth of something",
    chinese_definition: "承认；确认；致谢",
    synonyms: [
      { word: "admit", translation: "承认" },
      { word: "recognize", translation: "认可" },
      { word: "accept", translation: "接受" }
    ],
    collocations: [
      { phrase: "acknowledge receipt", translation: "确认收到" },
      { phrase: "acknowledge mistake", translation: "承认错误" },
      { phrase: "acknowledge contribution", translation: "致谢贡献" }
    ],
    example_sentence: "The company acknowledged the customer's complaint.",
    example_translation: "公司承认了顾客的投诉。",
    status: "unlearned"
  },
  {
    word: "affiliate",
    phonetic: "/əˈfɪlieɪt/",
    definition: "officially attach or connect to a larger organization",
    chinese_definition: "使隶属；接纳；加入",
    synonyms: [
      { word: "associate", translation: "联合" },
      { word: "connect", translation: "连接" },
      { word: "join", translation: "加入" }
    ],
    collocations: [
      { phrase: "affiliate with", translation: "与...关联" },
      { phrase: "affiliate company", translation: "子公司" },
      { phrase: "affiliate program", translation: "会员计划" }
    ],
    example_sentence: "Our university is affiliated with several research institutes.",
    example_translation: "我们大学与几个研究所有关联。",
    status: "unlearned"
  },
  {
    word: "ambiguous",
    phonetic: "/æmˈbɪɡjuəs/",
    definition: "open to more than one interpretation; having a double meaning",
    chinese_definition: "模糊的；模棱两可的；含糊不清的",
    synonyms: [
      { word: "unclear", translation: "不清楚的" },
      { word: "vague", translation: "模糊的" },
      { word: "confusing", translation: "令人困惑的" }
    ],
    collocations: [
      { phrase: "ambiguous term", translation: "模糊术语" },
      { phrase: "ambiguous response", translation: "模棱两可的回答" },
      { phrase: "remain ambiguous", translation: "保持模糊" }
    ],
    example_sentence: "The instructions were ambiguous and difficult to follow.",
    example_translation: "说明含糊不清，难以遵循。",
    status: "unlearned"
  },
  {
    word: "analyze",
    phonetic: "/ˈænəlaɪz/",
    definition: "examine methodically and in detail the constitution of something",
    chinese_definition: "分析；细察；分解",
    synonyms: [
      { word: "examine", translation: "检查" },
      { word: "evaluate", translation: "评估" },
      { word: "study", translation: "研究" }
    ],
    collocations: [
      { phrase: "analyze data", translation: "分析数据" },
      { phrase: "analyze results", translation: "分析结果" },
      { phrase: "carefully analyze", translation: "仔细分析" }
    ],
    example_sentence: "The researchers analyzed the data from the experiment.",
    example_translation: "研究人员分析了实验的数据。",
    status: "unlearned"
  },
  {
    word: "anticipate",
    phonetic: "/ænˈtɪsɪpeɪt/",
    definition: "regard as probable; expect or predict",
    chinese_definition: "预期；预料； anticipate",
    synonyms: [
      { word: "expect", translation: "期望" },
      { word: "predict", translation: "预测" },
      { word: "foresee", translation: "预见" }
    ],
    collocations: [
      { phrase: "anticipate problems", translation: "预见问题" },
      { phrase: "anticipate demand", translation: "预期需求" },
      { phrase: "anticipate changes", translation: "预料变化" }
    ],
    example_sentence: "We anticipate that sales will increase next quarter.",
    example_translation: "我们预计下季度销售额将增长。",
    status: "unlearned"
  },
  {
    word: "apparent",
    phonetic: "/əˈpærənt/",
    definition: "clearly visible or understood; obvious",
    chinese_definition: "明显的；显而易见的；表面的",
    synonyms: [
      { word: "obvious", translation: "明显的" },
      { word: "evident", translation: "明显的" },
      { word: "visible", translation: "可见的" }
    ],
    collocations: [
      { phrase: "apparent reason", translation: "明显原因" },
      { phrase: "apparent effect", translation: "明显效果" },
      { phrase: "become apparent", translation: "变得明显" }
    ],
    example_sentence: "It became apparent that the project was doomed to fail.",
    example_translation: "项目注定失败已变得明显。",
    status: "unlearned"
  },
  {
    word: "appreciate",
    phonetic: "/əˈpriːʃieɪt/",
    definition: "be grateful for; value highly",
    chinese_definition: "感激；欣赏；赏识",
    synonyms: [
      { word: "value", translation: "重视" },
      { word: "cherish", translation: "珍惜" },
      { word: "treasure", translation: "珍视" }
    ],
    collocations: [
      { phrase: "appreciate effort", translation: "感谢努力" },
      { phrase: "appreciate help", translation: "感激帮助" },
      { phrase: "greatly appreciate", translation: "非常感激" }
    ],
    example_sentence: "We appreciate your cooperation in this matter.",
    example_translation: "我们感谢您在此事上的合作。",
    status: "unlearned"
  },
  {
    word: "appropriate",
    phonetic: "/əˈprəʊpriət/",
    definition: "suitable or proper in the circumstances",
    chinese_definition: "适当的；恰当的；合适的",
    synonyms: [
      { word: "suitable", translation: "合适的" },
      { word: "fitting", translation: "恰当的" },
      { word: "proper", translation: "正确的" }
    ],
    collocations: [
      { phrase: "appropriate action", translation: "适当行动" },
      { phrase: "appropriate measure", translation: "恰当措施" },
      { phrase: "entirely appropriate", translation: "完全恰当" }
    ],
    example_sentence: "It is appropriate to wear formal attire to the interview.",
    example_translation: "面试穿正装是合适的。",
    status: "unlearned"
  },
  {
    word: "articulate",
    phonetic: "/ɑːˈtɪkjʊleɪt/",
    definition: "express ideas or feelings clearly and effectively",
    chinese_definition: "清晰表达；明确说明；连贯",
    synonyms: [
      { word: "express", translation: "表达" },
      { word: "enunciate", translation: "清晰发音" },
      { word: "communicate", translation: "传达" }
    ],
    collocations: [
      { phrase: "articulate clearly", translation: "清晰表达" },
      { phrase: "articulate ideas", translation: "阐述观点" },
      { phrase: "well articulate", translation: "善于表达" }
    ],
    example_sentence: "She articulated her concerns about the new policy.",
    example_translation: "她清晰表达了对新政策的担忧。",
    status: "unlearned"
  },
  {
    word: "assess",
    phonetic: "/əˈses/",
    definition: "evaluate or estimate the nature, quality, or ability of someone or something",
    chinese_definition: "评估；评价；估计",
    synonyms: [
      { word: "evaluate", translation: "评价" },
      { word: "estimate", translation: "估算" },
      { word: "judge", translation: "判断" }
    ],
    collocations: [
      { phrase: "assess performance", translation: "评估表现" },
      { phrase: "assess impact", translation: "评估影响" },
      { phrase: "assess situation", translation: "评估情况" }
    ],
    example_sentence: "The team will assess the feasibility of the proposal.",
    example_translation: "团队将评估提案的可行性。",
    status: "unlearned"
  },
  {
    word: "associate",
    phonetic: "/əˈsəʊʃieɪt/",
    definition: "connect or bring into relationship with",
    chinese_definition: "联想；联系；关联",
    synonyms: [
      { word: "connect", translation: "连接" },
      { word: "link", translation: "链接" },
      { word: "relate", translation: "相关" }
    ],
    collocations: [
      { phrase: "associate with", translation: "与...关联" },
      { phrase: "closely associate", translation: "密切联系" },
      { phrase: "strongly associate", translation: "强烈联想" }
    ],
    example_sentence: "People often associate the color blue with sadness.",
    example_translation: "人们常把蓝色和悲伤联想在一起。",
    status: "unlearned"
  },
  {
    word: "attribute",
    phonetic: "/əˈtrɪbjuːt/",
    definition: "regard something as being caused by someone or something",
    chinese_definition: "归因于；把...归咎于",
    synonyms: [
      { word: "ascribe", translation: "归因于" },
      { word: "assign", translation: "分配" },
      { word: "credit", translation: "归功于" }
    ],
    collocations: [
      { phrase: "attribute to", translation: "归因于" },
      { phrase: "attribute success", translation: "归功于成功" },
      { phrase: "attribute failure", translation: "归咎于失败" }
    ],
    example_sentence: "We attribute the delay to bad weather conditions.",
    example_translation: "我们将延误归因于恶劣的天气条件。",
    status: "unlearned"
  },
  {
    word: "automate",
    phonetic: "/ˈɔːtəmeɪt/",
    definition: "convert to largely automatic operation",
    chinese_definition: "自动化；使自动",
    synonyms: [
      { word: "mechanize", translation: "机械化" },
      { word: "computerize", translation: "电脑化" },
      { word: "streamline", translation: "精简" }
    ],
    collocations: [
      { phrase: "automate process", translation: "自动化流程" },
      { phrase: "automate system", translation: "自动化系统" },
      { phrase: "fully automate", translation: "完全自动化" }
    ],
    example_sentence: "The factory automated most of its production lines.",
    example_translation: "这家工厂自动化了大部分生产线。",
    status: "unlearned"
  },
  {
    word: "advocate",
    phonetic: "/ˈædvəkeɪt/",
    definition: "publicly recommend or support",
    chinese_definition: "提倡；拥护；支持",
    synonyms: [
      { word: "support", translation: "支持" },
      { word: "recommend", translation: "推荐" },
      { word: "promote", translation: "推动" }
    ],
    collocations: [
      { phrase: "advocate for", translation: "提倡" },
      { phrase: "strongly advocate", translation: "强烈支持" },
      { phrase: "advocate change", translation: "倡导变革" }
    ],
    example_sentence: "The organization advocates for better environmental regulations.",
    example_translation: "该组织提倡更好的环境法规。",
    status: "unlearned"
  },
  {
    word: "alleviate",
    phonetic: "/əˈliːvieɪt/",
    definition: "make suffering or a problem less severe",
    chinese_definition: "减轻；缓解；缓和",
    synonyms: [
      { word: "ease", translation: "减轻" },
      { word: "relieve", translation: "缓解" },
      { word: "mitigate", translation: "减轻" }
    ],
    collocations: [
      { phrase: "alleviate poverty", translation: "减轻贫困" },
      { phrase: "alleviate pain", translation: "减轻痛苦" },
      { phrase: "alleviate burden", translation: "减轻负担" }
    ],
    example_sentence: "The medicine helped alleviate her symptoms.",
    example_translation: "这种药物帮助缓解了她的症状。",
    status: "unlearned"
  },
  {
    word: "aptitude",
    phonetic: "/ˈæptɪtjuːd/",
    definition: "natural ability or skill",
    chinese_definition: "天赋；资质；倾向",
    synonyms: [
      { word: "talent", translation: "天赋" },
      { word: "skill", translation: "技能" },
      { word: "ability", translation: "能力" }
    ],
    collocations: [
      { phrase: "musical aptitude", translation: "音乐天赋" },
      { phrase: "natural aptitude", translation: "天然资质" },
      { phrase: "demonstrate aptitude", translation: "展示资质" }
    ],
    example_sentence: "She has a natural aptitude for mathematics.",
    example_translation: "她有数学天赋。",
    status: "unlearned"
  },
  {
    word: "bolster",
    phonetic: "/ˈbəʊlstər/",
    definition: "support or strengthen; improve or reinforce",
    chinese_definition: "支撑；增强；鼓励",
    synonyms: [
      { word: "strengthen", translation: "加强" },
      { word: "reinforce", translation: "加固" },
      { word: "support", translation: "支持" }
    ],
    collocations: [
      { phrase: "bolster confidence", translation: "增强信心" },
      { phrase: "bolster economy", translation: "支撑经济" },
      { phrase: "bolster position", translation: "巩固地位" }
    ],
    example_sentence: "New policies were introduced to bolster the economy.",
    example_translation: "新政策出台以支撑经济。",
    status: "unlearned"
  },
  {
    word: "capacity",
    phonetic: "/kəˈpæsəti/",
    definition: "the ability to hold, receive, or accommodate something",
    chinese_definition: "容量；能力；资格",
    synonyms: [
      { word: "ability", translation: "能力" },
      { word: "capability", translation: "性能" },
      { word: "volume", translation: "体积" }
    ],
    collocations: [
      { phrase: "mental capacity", translation: "心智能力" },
      { phrase: "full capacity", translation: "全容量" },
      { phrase: "production capacity", translation: "生产能力" }
    ],
    example_sentence: "The stadium has a seating capacity of 50,000.",
    example_translation: "体育场可容纳5万名观众。",
    status: "unlearned"
  },
  {
    word: "coherent",
    phonetic: "/kəʊˈhɪərənt/",
    definition: "logical and consistent; forming a unified whole",
    chinese_definition: "连贯的；一致的；条理分明的",
    synonyms: [
      { word: "consistent", translation: "一致的" },
      { word: "logical", translation: "逻辑的" },
      { word: "organized", translation: "有组织的" }
    ],
    collocations: [
      { phrase: "coherent argument", translation: "连贯的论点" },
      { phrase: "coherent policy", translation: "一致的政策" },
      { phrase: "remain coherent", translation: "保持连贯" }
    ],
    example_sentence: "The essay presented a coherent argument.",
    example_translation: "文章提出了一个连贯的论点。",
    status: "unlearned"
  },
  {
    word: "coincide",
    phonetic: "/ˌkəʊɪnˈsaɪd/",
    definition: "occur at the same time or place",
    chinese_definition: "巧合；同时发生；一致",
    synonyms: [
      { word: "overlap", translation: "重叠" },
      { word: "correspond", translation: "对应" },
      { word: "synchronize", translation: "同步" }
    ],
    collocations: [
      { phrase: "coincide with", translation: "与...同时发生" },
      { phrase: "purely coincidental", translation: "纯属巧合" },
      { phrase: "coincide exactly", translation: "完全一致" }
    ],
    example_sentence: "The meeting coincided with the conference.",
    example_translation: "会议与研讨会同时进行。",
    status: "unlearned"
  },
  {
    word: "collaborate",
    phonetic: "/kəˈlæbəreɪt/",
    definition: "work jointly on an activity; produce something with others",
    chinese_definition: "协作；合作；合著",
    synonyms: [
      { word: "cooperate", translation: "合作" },
      { word: "work together", translation: "共同工作" },
      { word: "partner", translation: "合作" }
    ],
    collocations: [
      { phrase: "collaborate on", translation: "协作于" },
      { phrase: "closely collaborate", translation: "密切合作" },
      { phrase: "effectively collaborate", translation: "有效协作" }
    ],
    example_sentence: "The two companies collaborated on the new software.",
    example_translation: "这两家公司合作开发新软件。",
    status: "unlearned"
  },
  {
    word: "compromise",
    phonetic: "/ˈkɒmprəmaɪz/",
    definition: "settle a dispute by mutual concession; endanger or weaken",
    chinese_definition: "妥协；折中；危及",
    synonyms: [
      { word: "settle", translation: "解决" },
      { word: "negotiate", translation: "协商" },
      { word: "endanger", translation: "危及" }
    ],
    collocations: [
      { phrase: "reach a compromise", translation: "达成妥协" },
      { phrase: "compromise principle", translation: "妥协原则" },
      { phrase: "unwilling to compromise", translation: "不愿妥协" }
    ],
    example_sentence: "They had to compromise on the budget to move forward.",
    example_translation: "他们不得不在预算上妥协以继续前进。",
    status: "unlearned"
  },
  {
    word: "conceive",
    phonetic: "/kənˈsiːv/",
    definition: "create or form an idea, plan, etc. in the mind",
    chinese_definition: "构想；构思；怀孕",
    synonyms: [
      { word: "imagine", translation: "想象" },
      { word: "create", translation: "创造" },
      { word: "formulate", translation: "制定" }
    ],
    collocations: [
      { phrase: "conceive idea", translation: "构想观点" },
      { phrase: "hard to conceive", translation: "难以构想" },
      { phrase: "conceive plan", translation: "制定计划" }
    ],
    example_sentence: "It's hard to conceive a better solution.",
    example_translation: "很难构想出更好的解决方案。",
    status: "unlearned"
  },
  {
    word: "concur",
    phonetic: "/kənˈkɜːr/",
    definition: "be of the same opinion; agree",
    chinese_definition: "同意；一致；同时发生",
    synonyms: [
      { word: "agree", translation: "同意" },
      { word: "accord", translation: "一致" },
      { word: "approve", translation: "批准" }
    ],
    collocations: [
      { phrase: "concur with", translation: "同意" },
      { phrase: "fully concur", translation: "完全同意" },
      { phrase: "generally concur", translation: "普遍赞同" }
    ],
    example_sentence: "The committee members concurred on the decision.",
    example_translation: "委员会成员一致同意这项决定。",
    status: "unlearned"
  },
  {
    word: "consecutive",
    phonetic: "/kənˈsekjʊtɪv/",
    definition: "following continuously; one after another without interruption",
    chinese_definition: "连续的；连贯的；接续的",
    synonyms: [
      { word: "continuous", translation: "连续的" },
      { word: "successive", translation: "连续的" },
      { word: "sequential", translation: "顺序的" }
    ],
    collocations: [
      { phrase: "consecutive days", translation: "连续天数" },
      { phrase: "consecutive years", translation: "连续年份" },
      { phrase: "consecutive wins", translation: "连续获胜" }
    ],
    example_sentence: "The team has won five consecutive games.",
    example_translation: "球队已连续赢得5场比赛。",
    status: "unlearned"
  },
  {
    word: "contend",
    phonetic: "/kənˈtend/",
    definition: "assert something as a fact; struggle or compete",
    chinese_definition: "主张；竞争；声称",
    synonyms: [
      { word: "claim", translation: "声称" },
      { word: "compete", translation: "竞争" },
      { word: "struggle", translation: "斗争" }
    ],
    collocations: [
      { phrase: "contend with", translation: "与...竞争" },
      { phrase: "contend that", translation: "主张" },
      { phrase: "fierce contended", translation: "激烈竞争" }
    ],
    example_sentence: "Scientists contend that climate change is real.",
    example_translation: "科学家声称气候变化是真实的。",
    status: "unlearned"
  },
  {
    word: "coordinate",
    phonetic: "/kəʊˈɔːdɪneɪt/",
    definition: "organize different parts into a whole; work together efficiently",
    chinese_definition: "协调；整合；配合",
    synonyms: [
      { word: "organize", translation: "组织" },
      { word: "synchronize", translation: "同步" },
      { word: "harmonize", translation: "协调" }
    ],
    collocations: [
      { phrase: "coordinate efforts", translation: "协调努力" },
      { phrase: "coordinate action", translation: "协调行动" },
      { phrase: "closely coordinate", translation: "密切协调" }
    ],
    example_sentence: "We need to coordinate our schedules to meet the deadline.",
    example_translation: "我们需要协调时间表以赶上截止日期。",
    status: "unlearned"
  },
  {
    word: "cultivate",
    phonetic: "/ˈkʌltɪveɪt/",
    definition: "foster the growth of plants or animals; improve through study",
    chinese_definition: "培养；培育；陶冶",
    synonyms: [
      { word: "nurture", translation: "培养" },
      { word: "foster", translation: "促进" },
      { word: "develop", translation: "发展" }
    ],
    collocations: [
      { phrase: "cultivate talent", translation: "培养人才" },
      { phrase: "cultivate relationship", translation: "建立关系" },
      { phrase: "carefully cultivate", translation: "精心培养" }
    ],
    example_sentence: "The school aims to cultivate students' critical thinking.",
    example_translation: "学校旨在培养学生的批判性思维。",
    status: "unlearned"
  },
  {
    word: "decline",
    phonetic: "/dɪˈklaɪn/",
    definition: "become smaller, fewer, or less; decrease",
    chinese_definition: "下降；减少；婉拒",
    synonyms: [
      { word: "decrease", translation: "减少" },
      { word: "deteriorate", translation: "恶化" },
      { word: "refuse", translation: "拒绝" }
    ],
    collocations: [
      { phrase: "decline invitation", translation: "拒绝邀请" },
      { phrase: "decline rapidly", translation: "急剧下降" },
      { phrase: "steady decline", translation: "稳定下降" }
    ],
    example_sentence: "Sales declined by 15% last quarter.",
    example_translation: "上季度销售额下降了15%。",
    status: "unlearned"
  },
  {
    word: "designate",
    phonetic: "/ˈdezɪɡneɪt/",
    definition: "appoint or choose for a special purpose or role",
    chinese_definition: "指定；指派；标明",
    synonyms: [
      { word: "appoint", translation: "任命" },
      { word: "assign", translation: "分配" },
      { word: "specify", translation: "指定" }
    ],
    collocations: [
      { phrase: "designate as", translation: "指定为" },
      { phrase: "designate area", translation: "指定区域" },
      { phrase: "officially designate", translation: "正式指定" }
    ],
    example_sentence: "The building was designated as a historic site.",
    example_translation: "该建筑被指定为历史遗迹。",
    status: "unlearned"
  },
  {
    word: "demonstrate",
    phonetic: "/ˈdemənstreɪt/",
    definition: "show or prove something clearly; give a practical exhibition",
    chinese_definition: "证明；示范；展示",
    synonyms: [
      { word: "show", translation: "展示" },
      { word: "prove", translation: "证明" },
      { word: "display", translation: "显示" }
    ],
    collocations: [
      { phrase: "demonstrate skills", translation: "展示技能" },
      { phrase: "clearly demonstrate", translation: "清楚地证明" },
      { phrase: "demonstrate commitment", translation: "展示承诺" }
    ],
    example_sentence: "The study demonstrates the link between diet and health.",
    example_translation: "研究表明饮食与健康之间存在联系。",
    status: "unlearned"
  },
  {
    word: "derive",
    phonetic: "/dɪˈraɪv/",
    definition: "obtain something from a specified source",
    chinese_definition: "获得；起源于；推导出",
    synonyms: [
      { word: "obtain", translation: "获得" },
      { word: "originate", translation: "起源" },
      { word: "extract", translation: "提取" }
    ],
    collocations: [
      { phrase: "derive from", translation: "源于" },
      { phrase: "derive benefit", translation: "获得利益" },
      { phrase: "derive conclusion", translation: "得出结论" }
    ],
    example_sentence: "We derive most of our energy from fossil fuels.",
    example_translation: "我们的能源主要来自化石燃料。",
    status: "unlearned"
  },
  {
    word: "deviate",
    phonetic: "/ˈdiːvieɪt/",
    definition: "depart from an established course or norm; diverge",
    chinese_definition: "偏离；背离；越轨",
    synonyms: [
      { word: "diverge", translation: "分歧" },
      { word: "depart", translation: "偏离" },
      { word: "stray", translation: "走偏" }
    ],
    collocations: [
      { phrase: "deviate from", translation: "偏离" },
      { phrase: "significantly deviate", translation: "显著偏离" },
      { phrase: "deviate from the norm", translation: "偏离规范" }
    ],
    example_sentence: "The company's performance deviated from expectations.",
    example_translation: "公司业绩偏离了预期。",
    status: "unlearned"
  },
  {
    word: "discrepancy",
    phonetic: "/dɪsˈkrepənsi/",
    definition: "a lack of compatibility or agreement between facts and claims",
    chinese_definition: "差异；不一致；矛盾",
    synonyms: [
      { word: "difference", translation: "差异" },
      { word: "inconsistency", translation: "不一致" },
      { word: "conflict", translation: "冲突" }
    ],
    collocations: [
      { phrase: "resolve discrepancy", translation: "解决差异" },
      { phrase: "significant discrepancy", translation: "显著差异" },
      { phrase: "account for discrepancy", translation: "解释差异" }
    ],
    example_sentence: "There was a discrepancy between the two reports.",
    example_translation: "两份报告之间存在差异。",
    status: "unlearned"
  },
  {
    word: "distinguish",
    phonetic: "/dɪˈstɪŋɡwɪʃ/",
    definition: "recognize or perceive differences; make distinct",
    chinese_definition: "区分；辨别；使杰出",
    synonyms: [
      { word: "differentiate", translation: "区分" },
      { word: "discriminate", translation: "辨别" },
      { word: "identify", translation: "识别" }
    ],
    collocations: [
      { phrase: "distinguish between", translation: "区分" },
      { phrase: "clearly distinguish", translation: "清晰辨别" },
      { phrase: "hard to distinguish", translation: "难以区分" }
    ],
    example_sentence: "It's difficult to distinguish between the two species.",
    example_translation: "很难区分这两个物种。",
    status: "unlearned"
  },
  // ==================== BATCH 3 (101-150) ====================
  {
    word: "exceed",
    phonetic: "/ɪkˈsiːd/",
    definition: "be greater in number or amount than; surpass",
    chinese_definition: "超过；胜过；超越",
    synonyms: [
      { word: "surpass", translation: "超越" },
      { word: "outdo", translation: "胜过" },
      { word: "transcend", translation: "超越" }
    ],
    collocations: [
      { phrase: "exceed expectations", translation: "超出预期" },
      { phrase: "exceed limit", translation: "超过限制" },
      { phrase: "far exceed", translation: "远远超过" }
    ],
    example_sentence: "Sales exceeded all previous records.",
    example_translation: "销售额超过了以往的所有记录。",
    status: "unlearned"
  },
  {
    word: "expire",
    phonetic: "/ɪkˈspaɪər/",
    definition: "cease to be valid or in effect after a period of time",
    chinese_definition: "过期；期满；失效",
    synonyms: [
      { word: "terminate", translation: "终止" },
      { word: "end", translation: "结束" },
      { word: "lapse", translation: "失效" }
    ],
    collocations: [
      { phrase: "expire soon", translation: "即将过期" },
      { phrase: "contract expire", translation: "合同到期" },
      { phrase: "expire automatically", translation: "自动过期" }
    ],
    example_sentence: "Your membership will expire next month.",
    example_translation: "您的会员资格下个月到期。",
    status: "unlearned"
  },
  {
    word: "explicit",
    phonetic: "/ɪkˈsplɪsɪt/",
    definition: "stated clearly and in detail; leaving no room for doubt",
    chinese_definition: "明确的；清楚的；坦率的",
    synonyms: [
      { word: "clear", translation: "清楚的" },
      { word: "specific", translation: "具体的" },
      { word: "definite", translation: "明确的" }
    ],
    collocations: [
      { phrase: "explicit consent", translation: "明确同意" },
      { phrase: "explicit instruction", translation: "明确指示" },
      { phrase: "quite explicit", translation: "相当明确" }
    ],
    example_sentence: "The author gave explicit instructions for the experiment.",
    example_translation: "作者为实验提供了明确的指示。",
    status: "unlearned"
  },
  {
    word: "fabricate",
    phonetic: "/ˈfæbrɪkeɪt/",
    definition: "invent or concoct, often with intent to deceive",
    chinese_definition: "捏造；伪造；编造",
    synonyms: [
      { word: "invent", translation: "发明" },
      { word: "forge", translation: "伪造" },
      { word: "counterfeit", translation: "伪造" }
    ],
    collocations: [
      { phrase: "fabricate evidence", translation: "伪造证据" },
      { phrase: "fabricate story", translation: "编造故事" },
      { phrase: "deliberately fabricate", translation: "故意捏造" }
    ],
    example_sentence: "The witness was accused of fabricating his testimony.",
    example_translation: "证人被指控作伪证。",
    status: "unlearned"
  },
  {
    word: "fundamental",
    phonetic: "/ˌfʌndəˈmentl/",
    definition: "forming a necessary base or core; of central importance",
    chinese_definition: "根本的；基础的；核心的",
    synonyms: [
      { word: "essential", translation: "本质的" },
      { word: "basic", translation: "基础的" },
      { word: "core", translation: "核心的" }
    ],
    collocations: [
      { phrase: "fundamental right", translation: "基本权利" },
      { phrase: "fundamental change", translation: "根本变化" },
      { phrase: "fundamental principle", translation: "基本原则" }
    ],
    example_sentence: "Trust is fundamental to any healthy relationship.",
    example_translation: "信任是任何健康关系的基础。",
    status: "unlearned"
  },
  {
    word: "generate",
    phonetic: "/ˈdʒenəreɪt/",
    definition: "produce or create something; cause to arise",
    chinese_definition: "产生；生成；引起",
    synonyms: [
      { word: "produce", translation: "生产" },
      { word: "create", translation: "创造" },
      { word: "originate", translation: "起源" }
    ],
    collocations: [
      { phrase: "generate revenue", translation: "产生收入" },
      { phrase: "generate interest", translation: "产生兴趣" },
      { phrase: "automatically generate", translation: "自动生成" }
    ],
    example_sentence: "The policy will generate new employment opportunities.",
    example_translation: "这项政策将创造新的就业机会。",
    status: "unlearned"
  },
  {
    word: "hypothesize",
    phonetic: "/haɪˈpɒθəsaɪz/",
    definition: "put forward a hypothesis or suggest as a possible explanation",
    chinese_definition: "假设；推测",
    synonyms: [
      { word: "speculate", translation: "推测" },
      { word: "theorize", translation: "理论化" },
      { word: "assume", translation: "假设" }
    ],
    collocations: [
      { phrase: "hypothesize about", translation: "假设关于" },
      { phrase: "tentatively hypothesize", translation: "初步假设" },
      { phrase: "carefully hypothesize", translation: "仔细假设" }
    ],
    example_sentence: "Scientists hypothesize that the asteroid may hit Earth.",
    example_translation: "科学家假设小行星可能撞击地球。",
    status: "unlearned"
  },
  {
    word: "implication",
    phonetic: "/ˌɪmplɪˈkeɪʃn/",
    definition: "a likely consequence of something; a conclusion drawn from something",
    chinese_definition: "暗示；含义；影响",
    synonyms: [
      { word: "consequence", translation: "后果" },
      { word: "meaning", translation: "意义" },
      { word: "significance", translation: "重要性" }
    ],
    collocations: [
      { phrase: "serious implication", translation: "严重影响" },
      { phrase: "important implication", translation: "重要含义" },
      { phrase: "far-reaching implication", translation: "深远影响" }
    ],
    example_sentence: "The study has important implications for public health.",
    example_translation: "这项研究对公共卫生有重要影响。",
    status: "unlearned"
  },
  {
    word: "incorporate",
    phonetic: "/ɪnˈkɔːpəreɪt/",
    definition: "take in or include as part of a whole; combine",
    chinese_definition: "合并；纳入；包含",
    synonyms: [
      { word: "integrate", translation: "整合" },
      { word: "merge", translation: "合并" },
      { word: "combine", translation: "组合" }
    ],
    collocations: [
      { phrase: "incorporate feedback", translation: "纳入反馈" },
      { phrase: "fully incorporate", translation: "完全包含" },
      { phrase: "incorporate into", translation: "合并到" }
    ],
    example_sentence: "The new plan incorporates suggestions from all departments.",
    example_translation: "新计划纳入了所有部门的建议。",
    status: "unlearned"
  },
  {
    word: "inherent",
    phonetic: "/ɪnˈhɪərənt/",
    definition: "existing in something as a permanent and essential attribute",
    chinese_definition: "固有的；内在的；本质的",
    synonyms: [
      { word: "intrinsic", translation: "内在的" },
      { word: "innate", translation: "天生的" },
      { word: "essential", translation: "本质的" }
    ],
    collocations: [
      { phrase: "inherent risk", translation: "固有风险" },
      { phrase: "inherent flaw", translation: "内在缺陷" },
      { phrase: "inherent limitation", translation: "固有局限" }
    ],
    example_sentence: "There is an inherent risk in any investment.",
    example_translation: "任何投资都有固有风险。",
    status: "unlearned"
  },
  {
    word: "justify",
    phonetic: "/ˈdʒʌstɪfaɪ/",
    definition: "show or prove to be right or reasonable",
    chinese_definition: "证明...是正当的；为...辩护",
    synonyms: [
      { word: "defend", translation: "辩护" },
      { word: "validate", translation: "验证" },
      { word: "support", translation: "支持" }
    ],
    collocations: [
      { phrase: "justify decision", translation: "为决定辩护" },
      { phrase: "justify expense", translation: "为开支辩护" },
      { phrase: "adequately justify", translation: "充分证明" }
    ],
    example_sentence: "The manager had to justify the budget cuts.",
    example_translation: "经理必须为预算削减辩护。",
    status: "unlearned"
  },
  {
    word: "manipulate",
    phonetic: "/məˈnɪpjʊleɪt/",
    definition: "control or influence in a skillful or clever way",
    chinese_definition: "操纵；控制；篡改",
    synonyms: [
      { word: "control", translation: "控制" },
      { word: "influence", translation: "影响" },
      { word: "exploit", translation: "利用" }
    ],
    collocations: [
      { phrase: "manipulate data", translation: "操纵数据" },
      { phrase: "manipulate public opinion", translation: "操纵舆论" },
      { phrase: "emotionally manipulate", translation: "情感操纵" }
    ],
    example_sentence: "The company was accused of manipulating the market.",
    example_translation: "公司被指控操纵市场。",
    status: "unlearned"
  },
  {
    word: "modify",
    phonetic: "/ˈmɒdɪfaɪ/",
    definition: "make partial or minor changes; alter or adjust",
    chinese_definition: "修改；调整；改进",
    synonyms: [
      { word: "adjust", translation: "调整" },
      { word: "alter", translation: "改变" },
      { word: "adapt", translation: "适应" }
    ],
    collocations: [
      { phrase: "modify behavior", translation: "改变行为" },
      { phrase: "significantly modify", translation: "显著修改" },
      { phrase: "slightly modify", translation: "略微修改" }
    ],
    example_sentence: "The software allows users to modify the interface.",
    example_translation: "该软件允许用户修改界面。",
    status: "unlearned"
  },
  {
    word: "negligible",
    phonetic: "/ˈneɡlɪdʒəbl/",
    definition: "so small as not worth considering; insignificant",
    chinese_definition: "可忽略的；微不足道的；无足轻重的",
    synonyms: [
      { word: "insignificant", translation: "不重要的" },
      { word: "trivial", translation: "琐碎的" },
      { word: "minor", translation: "次要的" }
    ],
    collocations: [
      { phrase: "negligible amount", translation: "可忽略的金额" },
      { phrase: "negligible effect", translation: "微小影响" },
      { phrase: "statistically negligible", translation: "统计学上可忽略" }
    ],
    example_sentence: "The difference is negligible for practical purposes.",
    example_translation: "在实际用途中差异可忽略不计。",
    status: "unlearned"
  },
  {
    word: "obligate",
    phonetic: "/ˈɒblɪɡeɪt/",
    definition: "require or compel someone to do something",
    chinese_definition: "强制；迫使；使...有义务",
    synonyms: [
      { word: "require", translation: "要求" },
      { word: "compel", translation: "强迫" },
      { word: "mandate", translation: "强制" }
    ],
    collocations: [
      { phrase: "obligate to", translation: "有义务" },
      { phrase: "obligate company", translation: "强制公司" },
      { phrase: "legally obligate", translation: "法律义务" }
    ],
    example_sentence: "Companies are obligated to protect customer data.",
    example_translation: "公司有义务保护客户数据。",
    status: "unlearned"
  },
  {
    word: "predominant",
    phonetic: "/prɪˈdɒmɪnənt/",
    definition: "present as the strongest or main element; having greater power",
    chinese_definition: "占主导地位的；显著的；主要的",
    synonyms: [
      { word: "dominant", translation: "主导的" },
      { word: "prevailing", translation: "流行的" },
      { word: "leading", translation: "领先的" }
    ],
    collocations: [
      { phrase: "predominant feature", translation: "主要特征" },
      { phrase: "predominant factor", translation: "主要因素" },
      { phrase: "predominant view", translation: "主要观点" }
    ],
    example_sentence: "English is the predominant language in international business.",
    example_translation: "英语是国际商务中的主导语言。",
    status: "unlearned"
  },
  {
    word: "provoke",
    phonetic: "/prəˈvəʊk/",
    definition: "give rise to or bring about a strong reaction",
    chinese_definition: "激起；引发；挑衅",
    synonyms: [
      { word: "incite", translation: "煽动" },
      { word: "trigger", translation: "触发" },
      { word: "stir up", translation: "激起" }
    ],
    collocations: [
      { phrase: "provoke anger", translation: "激起愤怒" },
      { phrase: "provoke debate", translation: "引发辩论" },
      { phrase: "provoke reaction", translation: "引起反应" }
    ],
    example_sentence: "His comments provoked strong criticism.",
    example_translation: "他的评论激起了强烈批评。",
    status: "unlearned"
  },
  {
    word: "reinforce",
    phonetic: "/ˌriːɪnˈfɔːs/",
    definition: "strengthen or support; make stronger",
    chinese_definition: "加强；加固；强化",
    synonyms: [
      { word: "strengthen", translation: "加强" },
      { word: "support", translation: "支持" },
      { word: "fortify", translation: "加固" }
    ],
    collocations: [
      { phrase: "reinforce belief", translation: "强化信念" },
      { phrase: "reinforce argument", translation: "加强论点" },
      { phrase: "further reinforce", translation: "进一步强化" }
    ],
    example_sentence: "The teacher reinforced the key concepts.",
    example_translation: "老师强化了核心概念。",
    status: "unlearned"
  },
  {
    word: "scrutinize",
    phonetic: "/ˈskruːtɪnaɪz/",
    definition: "examine or inspect closely and thoroughly",
    chinese_definition: "仔细检查；详细审查；细察",
    synonyms: [
      { word: "examine", translation: "检查" },
      { word: "inspect", translation: "视察" },
      { word: "analyze", translation: "分析" }
    ],
    collocations: [
      { phrase: "scrutinize data", translation: "审查数据" },
      { phrase: "carefully scrutinize", translation: "仔细审查" },
      { phrase: "closely scrutinize", translation: "密切审查" }
    ],
    example_sentence: "Auditors scrutinized the company's financial records.",
    example_translation: "审计师详细审查了公司的财务记录。",
    status: "unlearned"
  },
  {
    word: "simulate",
    phonetic: "/ˈsɪmjʊleɪt/",
    definition: "imitate the appearance, character, or process of; create a likeness",
    chinese_definition: "模拟；模仿；仿真",
    synonyms: [
      { word: "imitate", translation: "模仿" },
      { word: "reproduce", translation: "再现" },
      { word: "replicate", translation: "复制" }
    ],
    collocations: [
      { phrase: "simulate conditions", translation: "模拟条件" },
      { phrase: "computer simulate", translation: "计算机模拟" },
      { phrase: "simulate experiment", translation: "模拟实验" }
    ],
    example_sentence: "The software can simulate various economic scenarios.",
    example_translation: "该软件可以模拟各种经济场景。",
    status: "unlearned"
  },
  {
    word: "substantiate",
    phonetic: "/sʌbˈstænʃieɪt/",
    definition: "provide evidence to support or prove the truth of",
    chinese_definition: "证实；证明；为...提供证据",
    synonyms: [
      { word: "verify", translation: "验证" },
      { word: "corroborate", translation: "证实" },
      { word: "confirm", translation: "确认" }
    ],
    collocations: [
      { phrase: "substantiate claim", translation: "证实声明" },
      { phrase: "substantiate evidence", translation: "提供证据" },
      { phrase: "fully substantiate", translation: "完全证实" }
    ],
    example_sentence: "You need to substantiate your allegations with evidence.",
    example_translation: "你需要用证据来证实你的指控。",
    status: "unlearned"
  },
  {
    word: "terminate",
    phonetic: "/ˈtɜːmɪneɪt/",
    definition: "bring to an end; cause to end",
    chinese_definition: "终止；结束；解除",
    synonyms: [
      { word: "end", translation: "结束" },
      { word: "discontinue", translation: "中止" },
      { word: "conclude", translation: "总结" }
    ],
    collocations: [
      { phrase: "terminate contract", translation: "终止合同" },
      { phrase: "terminate employment", translation: "终止雇佣" },
      { phrase: "abruptly terminate", translation: "突然终止" }
    ],
    example_sentence: "The company decided to terminate the project.",
    example_translation: "公司决定终止该项目。",
    status: "unlearned"
  },
  {
    word: "transmit",
    phonetic: "/trænzˈmɪt/",
    definition: "pass from one person or place to another; cause to spread",
    chinese_definition: "传播；传递；发射",
    synonyms: [
      { word: "convey", translation: "传达" },
      { word: "broadcast", translation: "广播" },
      { word: "transfer", translation: "转移" }
    ],
    collocations: [
      { phrase: "transmit data", translation: "传输数据" },
      { phrase: "transmit signal", translation: "传输信号" },
      { phrase: "transmit disease", translation: "传播疾病" }
    ],
    example_sentence: "The virus can transmit between humans.",
    example_translation: "病毒可以在人与人之间传播。",
    status: "unlearned"
  },
  {
    word: "underestimate",
    phonetic: "/ˌʌndərˈestɪmeɪt/",
    definition: "estimate something to be smaller or less important than it really is",
    chinese_definition: "低估；轻视",
    synonyms: [
      { word: "undervalue", translation: "低估" },
      { word: "discount", translation: "忽视" },
      { word: "minimize", translation: "最小化" }
    ],
    collocations: [
      { phrase: "underestimate importance", translation: "低估重要性" },
      { phrase: "consistently underestimate", translation: "持续低估" },
      { phrase: "grossly underestimate", translation: "严重低估" }
    ],
    example_sentence: "Don't underestimate the challenges ahead.",
    example_translation: "不要低估未来的挑战。",
    status: "unlearned"
  },
  {
    word: "violate",
    phonetic: "/ˈvaɪəleɪt/",
    definition: "break or act against a law, agreement, or principle",
    chinese_definition: "违反；违背；侵犯",
    synonyms: [
      { word: "breach", translation: "违反" },
      { word: "infringe", translation: "侵犯" },
      { word: "contravene", translation: "违背" }
    ],
    collocations: [
      { phrase: "violate rights", translation: "侵犯权利" },
      { phrase: "violate law", translation: "违法" },
      { phrase: "violate agreement", translation: "违约" }
    ],
    example_sentence: "The company was found to violate safety regulations.",
    example_translation: "该公司被发现违反安全法规。",
    status: "unlearned"
  },
  {
    word: "verify",
    phonetic: "/ˈverɪfaɪ/",
    definition: "make sure or demonstrate that something is true or accurate",
    chinese_definition: "核实；验证；证实",
    synonyms: [
      { word: "confirm", translation: "确认" },
      { word: "validate", translation: "验证" },
      { word: "authenticate", translation: "认证" }
    ],
    collocations: [
      { phrase: "verify information", translation: "核实信息" },
      { phrase: "verify results", translation: "验证结果" },
      { phrase: "carefully verify", translation: "仔细核实" }
    ],
    example_sentence: "Please verify your identity before entering.",
    example_translation: "请在进入前核实您的身份。",
    status: "unlearned"
  },
  {
    word: "withhold",
    phonetic: "/wɪðˈhəʊld/",
    definition: "refuse to give; hold back or keep something",
    chinese_definition: "扣留；保留；隐瞒",
    synonyms: [
      { word: "refuse", translation: "拒绝" },
      { word: "deny", translation: "否认" },
      { word: "conceal", translation: "隐瞒" }
    ],
    collocations: [
      { phrase: "withhold information", translation: "隐瞒信息" },
      { phrase: "withhold payment", translation: "扣留付款" },
      { phrase: "withhold approval", translation: "扣留批准" }
    ],
    example_sentence: "The bank decided to withhold the funds.",
    example_translation: "银行决定扣留这笔资金。",
    status: "unlearned"
  },
  {
    word: "constrain",
    phonetic: "/kənˈstreɪn/",
    definition: "limit or restrict; keep under control",
    chinese_definition: "限制；约束；强迫",
    synonyms: [
      { word: "restrict", translation: "限制" },
      { word: "limit", translation: "约束" },
      { word: "confine", translation: "局限" }
    ],
    collocations: [
      { phrase: "constrain growth", translation: "限制增长" },
      { phrase: "severely constrain", translation: "严重约束" },
      { phrase: "constrain ability", translation: "限制能力" }
    ],
    example_sentence: "Budget constraints limited our ability to expand.",
    example_translation: "预算限制限制了我们的扩张能力。",
    status: "unlearned"
  },
  {
    word: "diverse",
    phonetic: "/daɪˈvɜːs/",
    definition: "showing a great deal of variety; different from one another",
    chinese_definition: "多样的；不同的；多变的",
    synonyms: [
      { word: "varied", translation: "多样的" },
      { word: "heterogeneous", translation: "异质的" },
      { word: "different", translation: "不同的" }
    ],
    collocations: [
      { phrase: "culturally diverse", translation: "文化多元" },
      { phrase: "diverse backgrounds", translation: "不同背景" },
      { phrase: "diverse range", translation: "多种范围" }
    ],
    example_sentence: "The company employs people from diverse backgrounds.",
    example_translation: "公司聘用来自不同背景的人。",
    status: "unlearned"
  },
  {
    word: "emerge",
    phonetic: "/ɪˈmɜːdʒ/",
    definition: "appear or become known; come out",
    chinese_definition: "出现；浮现；成为",
    synonyms: [
      { word: "appear", translation: "出现" },
      { word: "arise", translation: "浮现" },
      { word: "surface", translation: "浮现" }
    ],
    collocations: [
      { phrase: "emerge as", translation: "作为...出现" },
      { phrase: "newly emerge", translation: "新出现" },
      { phrase: "gradually emerge", translation: "逐渐浮现" }
    ],
    example_sentence: "New evidence emerged from the investigation.",
    example_translation: "调查中浮现出了新的证据。",
    status: "unlearned"
  },
  {
    word: "converge",
    phonetic: "/kənˈvɜːdʒ/",
    definition: "tend to meet at a particular point; come together",
    chinese_definition: "趋同；汇聚；收敛",
    synonyms: [
      { word: "meet", translation: "会合" },
      { word: "unite", translation: "联合" },
      { word: "coalesce", translation: "合并" }
    ],
    collocations: [
      { phrase: "converge on", translation: "趋同于" },
      { phrase: "gradually converge", translation: "逐渐趋同" },
      { phrase: "converge toward", translation: "趋向" }
    ],
    example_sentence: "Different theories converge on the same conclusion.",
    example_translation: "不同的理论趋同于同一结论。",
    status: "unlearned"
  },
  {
    word: "deteriorate",
    phonetic: "/dɪˈtɪəriəreɪt/",
    definition: "become progressively worse",
    chinese_definition: "恶化；变坏；退化",
    synonyms: [
      { word: "worsen", translation: "恶化" },
      { word: "decline", translation: "衰退" },
      { word: "degrade", translation: "降级" }
    ],
    collocations: [
      { phrase: "deteriorate rapidly", translation: "迅速恶化" },
      { phrase: "deteriorate further", translation: "进一步恶化" },
      { phrase: "health deteriorate", translation: "健康状况恶化" }
    ],
    example_sentence: "The patient's condition began to deteriorate rapidly.",
    example_translation: "病人的状况开始迅速恶化。",
    status: "unlearned"
  },
  {
    word: "enhance",
    phonetic: "/ɪnˈhɑːns/",
    definition: "increase the quality, value, or power of something",
    chinese_definition: "提高；增强；改进",
    synonyms: [
      { word: "improve", translation: "改进" },
      { word: "amplify", translation: "增强" },
      { word: "elevate", translation: "提升" }
    ],
    collocations: [
      { phrase: "enhance performance", translation: "提高性能" },
      { phrase: "significantly enhance", translation: "显著增强" },
      { phrase: "further enhance", translation: "进一步增强" }
    ],
    example_sentence: "The new update will enhance user experience.",
    example_translation: "新更新将提升用户体验。",
    status: "unlearned"
  },
  {
    word: "fluctuate",
    phonetic: "/ˈflʌktʃueɪt/",
    definition: "change irregularly or unpredictably; rise and fall",
    chinese_definition: "波动；起伏；不定",
    synonyms: [
      { word: "vary", translation: "变化" },
      { word: "oscillate", translation: "波动" },
      { word: "undulate", translation: "起伏" }
    ],
    collocations: [
      { phrase: "fluctuate wildly", translation: "剧烈波动" },
      { phrase: "fluctuate between", translation: "在...之间波动" },
      { phrase: "constantly fluctuate", translation: "持续波动" }
    ],
    example_sentence: "Prices tend to fluctuate based on supply and demand.",
    example_translation: "价格根据供需情况波动。",
    status: "unlearned"
  },
  {
    word: "constitute",
    phonetic: "/ˈkɒnstɪtjuːt/",
    definition: "form or compose; be an essential part of",
    chinese_definition: "构成；组成；设立",
    synonyms: [
      { word: "comprise", translation: "包含" },
      { word: "form", translation: "形成" },
      { word: "establish", translation: "设立" }
    ],
    collocations: [
      { phrase: "constitute a threat", translation: "构成威胁" },
      { phrase: "constitute grounds", translation: "构成理由" },
      { phrase: "constitutionally constitute", translation: "宪法上构成" }
    ],
    example_sentence: "These factors constitute a significant challenge.",
    example_translation: "这些因素构成了重大挑战。",
    status: "unlearned"
  },
  {
    word: "allocate",
    phonetic: "/ˈæləkeɪt/",
    definition: "distribute or set apart for a special purpose",
    chinese_definition: "分配；拨给；配给",
    synonyms: [
      { word: "distribute", translation: "分发" },
      { word: "assign", translation: "分配" },
      { word: "apportion", translation: "配给" }
    ],
    collocations: [
      { phrase: "allocate resources", translation: "分配资源" },
      { phrase: "allocate budget", translation: "分配预算" },
      { phrase: "fairly allocate", translation: "公平分配" }
    ],
    example_sentence: "The government allocated funds for disaster relief.",
    example_translation: "政府拨出赈灾资金。",
    status: "unlearned"
  },
  {
    word: "conform",
    phonetic: "/kənˈfɔːrm/",
    definition: "comply with rules, standards, or expectations",
    chinese_definition: "遵守；符合；一致",
    synonyms: [
      { word: "comply", translation: "遵守" },
      { word: "adhere", translation: "遵循" },
      { word: "follow", translation: "遵循" }
    ],
    collocations: [
      { phrase: "conform to standards", translation: "符合标准" },
      { phrase: "conform to rules", translation: "遵守规则" },
      { phrase: "fail to conform", translation: "不符合" }
    ],
    example_sentence: "All products must conform to safety regulations.",
    example_translation: "所有产品必须符合安全法规。",
    status: "unlearned"
  },
  {
    word: "interpret",
    phonetic: "/ɪnˈtɜːprɪt/",
    definition: "explain the meaning of; make sense of",
    chinese_definition: "解释；诠释；理解",
    synonyms: [
      { word: "explain", translation: "解释" },
      { word: "understand", translation: "理解" },
      { word: "decode", translation: "解读" }
    ],
    collocations: [
      { phrase: "interpret data", translation: "解释数据" },
      { phrase: "interpret results", translation: "解读结果" },
      { phrase: "properly interpret", translation: "正确解读" }
    ],
    example_sentence: "Different cultures may interpret the gesture differently.",
    example_translation: "不同文化可能对这一手势有不同解读。",
    status: "unlearned"
  },
  {
    word: "manipulate",
    phonetic: "/məˈnɪpjʊleɪt/",
    definition: "control or influence in a skillful or clever way",
    chinese_definition: "操纵；控制；篡改",
    synonyms: [
      { word: "control", translation: "控制" },
      { word: "influence", translation: "影响" },
      { word: "exploit", translation: "利用" }
    ],
    collocations: [
      { phrase: "manipulate data", translation: "操纵数据" },
      { phrase: "manipulate public opinion", translation: "操纵舆论" },
      { phrase: "emotionally manipulate", translation: "情感操纵" }
    ],
    example_sentence: "The company was accused of manipulating the market.",
    example_translation: "公司被指控操纵市场。",
    status: "unlearned"
  },
  // ==================== BATCH 4 (151-200) ====================
  {
    word: "adapt",
    phonetic: "/əˈdæpt/",
    definition: "adjust to new conditions or changes",
    chinese_definition: "适应；改编；调整",
    synonyms: [
      { word: "adjust", translation: "调整" },
      { word: "modify", translation: "修改" },
      { word: "accommodate", translation: "容纳" }
    ],
    collocations: [
      { phrase: "adapt to change", translation: "适应变化" },
      { phrase: "quickly adapt", translation: "快速适应" },
      { phrase: "adapt strategy", translation: "调整策略" }
    ],
    example_sentence: "Organizations must adapt to changing market conditions.",
    example_translation: "组织必须适应不断变化的市场条件。",
    status: "unlearned"
  },
  {
    word: "advocate",
    phonetic: "/ˈædvəkət/",
    definition: "a person who publicly supports or recommends a particular cause",
    chinese_definition: "提倡者；拥护者；辩护律师",
    synonyms: [
      { word: "supporter", translation: "支持者" },
      { word: "proponent", translation: "支持者" },
      { word: "champion", translation: "捍卫者" }
    ],
    collocations: [
      { phrase: "strong advocate", translation: "坚定的倡导者" },
      { phrase: "advocate for change", translation: "倡导变革" },
      { phrase: "passionate advocate", translation: "热情的拥护者" }
    ],
    example_sentence: "She is a passionate advocate for education reform.",
    example_translation: "她是教育改革的热情倡导者。",
    status: "unlearned"
  },
  {
    word: "aesthetic",
    phonetic: "/iːsˈθetɪk/",
    definition: "concerned with beauty or the appreciation of beauty",
    chinese_definition: "美学的；审美的；艺术上的",
    synonyms: [
      { word: "artistic", translation: "艺术的" },
      { word: "visual", translation: "视觉的" },
      { word: "beautiful", translation: "美丽的" }
    ],
    collocations: [
      { phrase: "aesthetic appeal", translation: "审美吸引力" },
      { phrase: "aesthetic value", translation: "美学价值" },
      { phrase: "aesthetic sense", translation: "审美感" }
    ],
    example_sentence: "The building's design has great aesthetic appeal.",
    example_translation: "这座建筑的设计具有极大的审美吸引力。",
    status: "unlearned"
  },
  {
    word: "affluent",
    phonetic: "/ˈæfluənt/",
    definition: "having a great deal of money; wealthy",
    chinese_definition: "富裕的；丰富的；流畅的",
    synonyms: [
      { word: "wealthy", translation: "富有的" },
      { word: "prosperous", translation: "繁荣的" },
      { word: "rich", translation: "富有的" }
    ],
    collocations: [
      { phrase: "affluent society", translation: "富裕社会" },
      { phrase: "affluent families", translation: "富裕家庭" },
      { phrase: "increasingly affluent", translation: "日益富裕" }
    ],
    example_sentence: "The neighborhood is known for its affluent residents.",
    example_translation: "这个社区以其富裕的居民而闻名。",
    status: "unlearned"
  },
  {
    word: "aggregate",
    phonetic: "/ˈæɡrɪɡət/",
    definition: "a whole formed by combining several elements",
    chinese_definition: "总计；集合；合计",
    synonyms: [
      { word: "total", translation: "总计" },
      { word: "combined", translation: "组合的" },
      { word: "overall", translation: "整体的" }
    ],
    collocations: [
      { phrase: "aggregate data", translation: "汇总数据" },
      { phrase: "in aggregate", translation: "总计" },
      { phrase: "aggregate score", translation: "总分" }
    ],
    example_sentence: "The aggregate score determines the winner.",
    example_translation: "总分决定获胜者。",
    status: "unlearned"
  },
  {
    word: "albeit",
    phonetic: "/ɔːlˈbiːɪt/",
    definition: "although; even though",
    chinese_definition: "虽然；尽管",
    synonyms: [
      { word: "although", translation: "虽然" },
      { word: "despite", translation: "尽管" },
      { word: "even though", translation: "即使" }
    ],
    collocations: [
      { phrase: "albeit small", translation: "虽然很小" },
      { phrase: "albeit brief", translation: "虽然简短" },
      { phrase: "albeit expensive", translation: "虽然昂贵" }
    ],
    example_sentence: "The trip was enjoyable, albeit exhausting.",
    example_translation: "这次旅行很愉快，虽然很累人。",
    status: "unlearned"
  },
  {
    word: "analogous",
    phonetic: "/əˈnæləɡəs/",
    definition: "comparable in certain respects; similar",
    chinese_definition: "类似的；可比的；相似的",
    synonyms: [
      { word: "similar", translation: "相似的" },
      { word: "comparable", translation: "可比的" },
      { word: "parallel", translation: "平行的" }
    ],
    collocations: [
      { phrase: "analogous to", translation: "类似于" },
      { phrase: "structurally analogous", translation: "结构上类似" },
      { phrase: "analogous situation", translation: "类似情况" }
    ],
    example_sentence: "The human heart is analogous to a pump.",
    example_translation: "人类心脏类似于水泵。",
    status: "unlearned"
  },
  {
    word: "anonymous",
    phonetic: "/əˈnɒnɪməs/",
    definition: "not identified by name; having no known name",
    chinese_definition: "匿名的；无名的；不知名的",
    synonyms: [
      { word: "unnamed", translation: "无名的" },
      { word: "nameless", translation: "不知名的" },
      { word: "unknown", translation: "未知的" }
    ],
    collocations: [
      { phrase: "anonymous source", translation: "匿名消息来源" },
      { phrase: "remain anonymous", translation: "保持匿名" },
      { phrase: "anonymous donation", translation: "匿名捐款" }
    ],
    example_sentence: "The donor wished to remain anonymous.",
    example_translation: "捐赠者希望保持匿名。",
    status: "unlearned"
  },
  {
    word: "arbitrary",
    phonetic: "/ˈɑːbɪtrəri/",
    definition: "based on random choice rather than reason",
    chinese_definition: "任意的；武断的；随机的",
    synonyms: [
      { word: "random", translation: "随机的" },
      { word: "subjective", translation: "主观的" },
      { word: "capricious", translation: "反复无常的" }
    ],
    collocations: [
      { phrase: "arbitrary decision", translation: "武断决定" },
      { phrase: "arbitrary rule", translation: "武断规则" },
      { phrase: "completely arbitrary", translation: "完全任意" }
    ],
    example_sentence: "The punishment seemed arbitrary and unfair.",
    example_translation: "惩罚似乎武断且不公平。",
    status: "unlearned"
  },
  {
    word: "aspire",
    phonetic: "/əˈspaɪər/",
    definition: "direct one's hopes or ambitions toward achieving something",
    chinese_definition: "渴望；追求；立志",
    synonyms: [
      { word: "desire", translation: "渴望" },
      { word: "aim", translation: "旨在" },
      { word: "strive", translation: "努力" }
    ],
    collocations: [
      { phrase: "aspire to be", translation: "立志成为" },
      { phrase: "aspire to greatness", translation: "追求伟大" },
      { phrase: "truly aspire", translation: "真正渴望" }
    ],
    example_sentence: "Many students aspire to attend prestigious universities.",
    example_translation: "许多学生渴望进入名牌大学。",
    status: "unlearned"
  },
  {
    word: "barrier",
    phonetic: "/ˈbæriər/",
    definition: "a circumstance or obstacle that keeps people apart",
    chinese_definition: "障碍；屏障；壁垒",
    synonyms: [
      { word: "obstacle", translation: "障碍" },
      { word: "hurdle", translation: "困难" },
      { word: "impediment", translation: "阻碍" }
    ],
    collocations: [
      { phrase: "language barrier", translation: "语言障碍" },
      { phrase: "break down barrier", translation: "打破壁垒" },
      { phrase: "significant barrier", translation: "重大障碍" }
    ],
    example_sentence: "Language can be a barrier to communication.",
    example_translation: "语言可能是沟通的障碍。",
    status: "unlearned"
  },
  {
    word: "bias",
    phonetic: "/ˈbaɪəs/",
    definition: "a systematic distortion of a statistical result",
    chinese_definition: "偏差；偏见；倾向",
    synonyms: [
      { word: "prejudice", translation: "偏见" },
      { word: "preference", translation: "偏好" },
      { word: "inclination", translation: "倾向" }
    ],
    collocations: [
      { phrase: "gender bias", translation: "性别偏见" },
      { phrase: "avoid bias", translation: "避免偏见" },
      { phrase: "inherent bias", translation: "固有偏见" }
    ],
    example_sentence: "The study attempted to eliminate selection bias.",
    example_translation: "该研究试图消除选择偏差。",
    status: "unlearned"
  },
  {
    word: "broaden",
    phonetic: "/ˈbrɔːdn/",
    definition: "make wider or more extensive",
    chinese_definition: "扩大；拓宽；变宽",
    synonyms: [
      { word: "widen", translation: "加宽" },
      { word: "expand", translation: "扩展" },
      { word: "extend", translation: "延伸" }
    ],
    collocations: [
      { phrase: "broaden horizons", translation: "开阔视野" },
      { phrase: "broaden scope", translation: "扩大范围" },
      { phrase: "broaden knowledge", translation: "拓宽知识" }
    ],
    example_sentence: "Travel can broaden your horizons.",
    example_translation: "旅行可以开阔你的视野。",
    status: "unlearned"
  },
  {
    word: "capacity",
    phonetic: "/kəˈpæsəti/",
    definition: "the maximum amount that something can contain",
    chinese_definition: "容量；能力；资格",
    synonyms: [
      { word: "ability", translation: "能力" },
      { word: "capability", translation: "性能" },
      { word: "volume", translation: "体积" }
    ],
    collocations: [
      { phrase: "full capacity", translation: "满负荷" },
      { phrase: "production capacity", translation: "生产能力" },
      { phrase: "mental capacity", translation: "心智能力" }
    ],
    example_sentence: "The stadium has a seating capacity of 50,000.",
    example_translation: "体育场可容纳5万名观众。",
    status: "unlearned"
  },
  {
    word: "cognitive",
    phonetic: "/ˈkɒɡnɪtɪv/",
    definition: "relating to the mental processes of perception and understanding",
    chinese_definition: "认知的；感知的；认识的",
    synonyms: [
      { word: "mental", translation: "精神的" },
      { word: "intellectual", translation: "智力的" },
      { word: "perceptual", translation: "感知的" }
    ],
    collocations: [
      { phrase: "cognitive ability", translation: "认知能力" },
      { phrase: "cognitive development", translation: "认知发展" },
      { phrase: "cognitive process", translation: "认知过程" }
    ],
    example_sentence: "Children's cognitive development is influenced by environment.",
    example_translation: "儿童的认知发展受环境影响。",
    status: "unlearned"
  },
  {
    word: "coincide",
    phonetic: "/ˌkəʊɪnˈsaɪd/",
    definition: "occur at the same time or place",
    chinese_definition: "巧合；同时发生；一致",
    synonyms: [
      { word: "overlap", translation: "重叠" },
      { word: "correspond", translation: "对应" },
      { word: "synchronize", translation: "同步" }
    ],
    collocations: [
      { phrase: "coincide with", translation: "与...同时" },
      { phrase: "purely coincidental", translation: "纯属巧合" },
      { phrase: "coincide exactly", translation: "完全一致" }
    ],
    example_sentence: "The meeting coincided with the conference.",
    example_translation: "会议与研讨会同时进行。",
    status: "unlearned"
  },
  {
    word: "commence",
    phonetic: "/kəˈmens/",
    definition: "begin or start",
    chinese_definition: "开始；着手；倡导",
    synonyms: [
      { word: "begin", translation: "开始" },
      { word: "start", translation: "启动" },
      { word: "initiate", translation: "发起" }
    ],
    collocations: [
      { phrase: "commence proceedings", translation: "开始程序" },
      { phrase: "commence immediately", translation: "立即开始" },
      { phrase: "formally commence", translation: "正式开始" }
    ],
    example_sentence: "The ceremony will commence at noon.",
    example_translation: "仪式将在中午开始。",
    status: "unlearned"
  },
  {
    word: "compatible",
    phonetic: "/kəmˈpætəbl/",
    definition: "able to exist or occur together without conflict",
    chinese_definition: "兼容的；能共存的；适宜的",
    synonyms: [
      { word: "suitable", translation: "合适的" },
      { word: "congenial", translation: "意气相投的" },
      { word: "consistent", translation: "一致的" }
    ],
    collocations: [
      { phrase: "compatible with", translation: "与...兼容" },
      { phrase: "fully compatible", translation: "完全兼容" },
      { phrase: "mutually compatible", translation: "相互兼容" }
    ],
    example_sentence: "The software is compatible with most operating systems.",
    example_translation: "该软件与大多数操作系统兼容。",
    status: "unlearned"
  },
  {
    word: "competence",
    phonetic: "/ˈkɒmpɪtəns/",
    definition: "the ability to do something successfully",
    chinese_definition: "能力；胜任；技能",
    synonyms: [
      { word: "ability", translation: "能力" },
      { word: "skill", translation: "技能" },
      { word: "expertise", translation: "专业知识" }
    ],
    collocations: [
      { phrase: "demonstrate competence", translation: "展示能力" },
      { phrase: "professional competence", translation: "专业能力" },
      { phrase: "core competence", translation: "核心竞争力" }
    ],
    example_sentence: "She has demonstrated exceptional competence in management.",
    example_translation: "她展示了卓越的管理能力。",
    status: "unlearned"
  },
  {
    word: "compile",
    phonetic: "/kəmˈpaɪl/",
    definition: "produce by assembling information from various sources",
    chinese_definition: "汇编；编译；收集",
    synonyms: [
      { word: "collect", translation: "收集" },
      { word: "assemble", translation: "组装" },
      { word: "gather", translation: "聚集" }
    ],
    collocations: [
      { phrase: "compile data", translation: "汇编数据" },
      { phrase: "compile report", translation: "编写报告" },
      { phrase: "carefully compile", translation: "仔细汇编" }
    ],
    example_sentence: "The team compiled statistics from various sources.",
    example_translation: "团队从各种来源汇编了统计数据。",
    status: "unlearned"
  },
  {
    word: "comprise",
    phonetic: "/kəmˈpraɪz/",
    definition: "consist of; be made up of",
    chinese_definition: "包含；由...组成；构成",
    synonyms: [
      { word: "consist of", translation: "由...组成" },
      { word: "include", translation: "包括" },
      { word: "contain", translation: "包含" }
    ],
    collocations: [
      { phrase: "comprise of", translation: "由...组成" },
      { phrase: "primarily comprise", translation: "主要由...组成" },
      { phrase: "largely comprise", translation: "主要由...构成" }
    ],
    example_sentence: "The committee comprises representatives from all departments.",
    example_translation: "委员会由各部门代表组成。",
    status: "unlearned"
  },
  {
    word: "conceive",
    phonetic: "/kənˈsiːv/",
    definition: "create or form an idea in the mind",
    chinese_definition: "构想；想象；怀孕",
    synonyms: [
      { word: "imagine", translation: "想象" },
      { word: "envision", translation: "设想" },
      { word: "design", translation: "设计" }
    ],
    collocations: [
      { phrase: "conceive idea", translation: "构想观点" },
      { phrase: "hard to conceive", translation: "难以想象" },
      { phrase: "originally conceive", translation: "最初构想" }
    ],
    example_sentence: "It's difficult to conceive a solution to this problem.",
    example_translation: "很难构想出这个问题的解决方案。",
    status: "unlearned"
  },
  {
    word: "conclusion",
    phonetic: "/kənˈkluːʒn/",
    definition: "the end or finish of something; a judgment",
    chinese_definition: "结论；结局；决定",
    synonyms: [
      { word: "ending", translation: "结局" },
      { word: "result", translation: "结果" },
      { word: "verdict", translation: "裁决" }
    ],
    collocations: [
      { phrase: "draw conclusion", translation: "得出结论" },
      { phrase: "reach conclusion", translation: "得出结论" },
      { phrase: "logical conclusion", translation: "逻辑结论" }
    ],
    example_sentence: "Based on the evidence, we drew this conclusion.",
    example_translation: "基于证据，我们得出了这个结论。",
    status: "unlearned"
  },
  {
    word: "concurrent",
    phonetic: "/kənˈkʌrənt/",
    definition: "existing, happening, or done at the same time",
    chinese_definition: "并发的；同时的；并行的",
    synonyms: [
      { word: "simultaneous", translation: "同时的" },
      { word: "coincident", translation: "巧合的" },
      { word: "parallel", translation: "平行的" }
    ],
    collocations: [
      { phrase: "concurrent with", translation: "与...同时" },
      { phrase: "concurrent operation", translation: "并发操作" },
      { phrase: "run concurrently", translation: "同时运行" }
    ],
    example_sentence: "The two events were concurrent with each other.",
    example_translation: "这两个活动同时进行。",
    status: "unlearned"
  },
  {
    word: "condemn",
    phonetic: "/kənˈdem/",
    definition: "express complete disapproval of; criticize strongly",
    chinese_definition: "谴责；判刑；定罪",
    synonyms: [
      { word: "criticize", translation: "批评" },
      { word: "denounce", translation: "谴责" },
      { word: "censure", translation: "责备" }
    ],
    collocations: [
      { phrase: "strongly condemn", translation: "强烈谴责" },
      { phrase: "condemn violence", translation: "谴责暴力" },
      { phrase: "publicly condemn", translation: "公开谴责" }
    ],
    example_sentence: "The international community condemned the attack.",
    example_translation: "国际社会谴责了这次袭击。",
    status: "unlearned"
  },
  {
    word: "confine",
    phonetic: "/kənˈfaɪn/",
    definition: "keep within limits; restrict",
    chinese_definition: "限制；禁闭；局限",
    synonyms: [
      { word: "restrict", translation: "限制" },
      { word: "limit", translation: "约束" },
      { word: "imprison", translation: "囚禁" }
    ],
    collocations: [
      { phrase: "confine to", translation: "局限于" },
      { phrase: "confine space", translation: "局限空间" },
      { phrase: "strictly confine", translation: "严格限制" }
    ],
    example_sentence: "The study was confined to urban areas.",
    example_translation: "该研究局限于城市地区。",
    status: "unlearned"
  },
  {
    word: "consent",
    phonetic: "/kənˈsent/",
    definition: "permission for something to happen; agreement",
    chinese_definition: "同意；许可；赞成",
    synonyms: [
      { word: "permission", translation: "许可" },
      { word: "approval", translation: "批准" },
      { word: "agreement", translation: "协议" }
    ],
    collocations: [
      { phrase: "give consent", translation: "给予同意" },
      { phrase: "informed consent", translation: "知情同意" },
      { phrase: "without consent", translation: "未经同意" }
    ],
    example_sentence: "The doctor needs your consent before proceeding.",
    example_translation: "医生需要你的同意才能继续。",
    status: "unlearned"
  },
  {
    word: "considerable",
    phonetic: "/kənˈsɪdərəbl/",
    definition: "notably large in size, amount, or extent",
    chinese_definition: "相当大的；可观的；重要的",
    synonyms: [
      { word: "significant", translation: "重要的" },
      { word: "substantial", translation: "实质性的" },
      { word: "substantial", translation: "大量的" }
    ],
    collocations: [
      { phrase: "considerable amount", translation: "相当大的数量" },
      { phrase: "considerable effort", translation: "相当大的努力" },
      { phrase: "of considerable importance", translation: "相当重要" }
    ],
    example_sentence: "The project required considerable investment.",
    example_translation: "该项目需要相当大的投资。",
    status: "unlearned"
  },
  {
    word: "constitute",
    phonetic: "/ˈkɒnstɪtjuːt/",
    definition: "form or compose; be a part of",
    chinese_definition: "构成；组成；设立",
    synonyms: [
      { word: "form", translation: "形成" },
      { word: "comprise", translation: "包含" },
      { word: "make up", translation: "组成" }
    ],
    collocations: [
      { phrase: "constitute a threat", translation: "构成威胁" },
      { phrase: "constitute grounds", translation: "构成理由" },
      { phrase: "legally constitute", translation: "法律上构成" }
    ],
    example_sentence: "These actions constitute a violation of the contract.",
    example_translation: "这些行为构成了违约。",
    status: "unlearned"
  },
  {
    word: "contemporary",
    phonetic: "/kənˈtemprəri/",
    definition: "living or occurring at the present time",
    chinese_definition: "当代的；现代的；同时代的",
    synonyms: [
      { word: "modern", translation: "现代的" },
      { word: "current", translation: "当前的" },
      { word: "present-day", translation: "今天的" }
    ],
    collocations: [
      { phrase: "contemporary art", translation: "当代艺术" },
      { phrase: "contemporary society", translation: "当代社会" },
      { phrase: "contemporary issues", translation: "当代问题" }
    ],
    example_sentence: "Contemporary architecture emphasizes sustainability.",
    example_translation: "当代建筑强调可持续性。",
    status: "unlearned"
  },
  {
    word: "contradict",
    phonetic: "/ˌkɒntrəˈdɪkt/",
    definition: "assert the opposite of; be in conflict with",
    chinese_definition: "反驳；与...矛盾；否认",
    synonyms: [
      { word: "oppose", translation: "反对" },
      { word: "deny", translation: "否认" },
      { word: "conflict with", translation: "与...冲突" }
    ],
    collocations: [
      { phrase: "contradict evidence", translation: "反驳证据" },
      { phrase: "directly contradict", translation: "直接反驳" },
      { phrase: "contradict statement", translation: "与声明矛盾" }
    ],
    example_sentence: "The new evidence contradicts his testimony.",
    example_translation: "新证据与他的证词相矛盾。",
    status: "unlearned"
  },
  {
    word: "convention",
    phonetic: "/kənˈvenʃn/",
    definition: "a way in which something is usually done",
    chinese_definition: "惯例；公约；大会",
    synonyms: [
      { word: "tradition", translation: "传统" },
      { word: "custom", translation: "习俗" },
      { word: "standard", translation: "标准" }
    ],
    collocations: [
      { phrase: "social convention", translation: "社会惯例" },
      { phrase: "break convention", translation: "打破惯例" },
      { phrase: "follow convention", translation: "遵循惯例" }
    ],
    example_sentence: "She challenged social conventions of her time.",
    example_translation: "她挑战了那个时代的社会惯例。",
    status: "unlearned"
  },
  {
    word: "correspond",
    phonetic: "/ˌkɒrɪˈspɒnd/",
    definition: "match or be similar or equivalent to",
    chinese_definition: "相符；通信；对应",
    synonyms: [
      { word: "match", translation: "匹配" },
      { word: "agree", translation: "同意" },
      { word: "align", translation: "对齐" }
    ],
    collocations: [
      { phrase: "correspond to", translation: "对应于" },
      { phrase: "correspond with", translation: "与...相符" },
      { phrase: "closely correspond", translation: "紧密对应" }
    ],
    example_sentence: "Your actions should correspond to your words.",
    example_translation: "你的行动应该与你的话语相符。",
    status: "unlearned"
  },
  {
    word: "credible",
    phonetic: "/ˈkredəbl/",
    definition: "able to be believed; convincing",
    chinese_definition: "可信的；可靠的；有说服力的",
    synonyms: [
      { word: "believable", translation: "可信的" },
      { word: "trustworthy", translation: "值得信赖的" },
      { word: "reliable", translation: "可靠的" }
    ],
    collocations: [
      { phrase: "credible evidence", translation: "可信证据" },
      { phrase: "credible source", translation: "可信来源" },
      { phrase: "highly credible", translation: "高度可信" }
    ],
    example_sentence: "The witness provided credible testimony.",
    example_translation: "证人提供了可信的证词。",
    status: "unlearned"
  },
  {
    word: "criteria",
    phonetic: "/kraɪˈtɪəriə/",
    definition: "principles or standards by which something may be judged",
    chinese_definition: "标准；准则；条件",
    synonyms: [
      { word: "standard", translation: "标准" },
      { word: "benchmark", translation: "基准" },
      { word: "requirement", translation: "要求" }
    ],
    collocations: [
      { phrase: "meet criteria", translation: "符合标准" },
      { phrase: "evaluation criteria", translation: "评估标准" },
      { phrase: "strict criteria", translation: "严格标准" }
    ],
    example_sentence: "The applicants must meet certain eligibility criteria.",
    example_translation: "申请人必须符合特定的资格标准。",
    status: "unlearned"
  },
  {
    word: "data",
    phonetic: "/ˈdeɪtə/",
    definition: "facts and statistics collected together for reference",
    chinese_definition: "数据；资料；信息",
    synonyms: [
      { word: "information", translation: "信息" },
      { word: "statistics", translation: "统计" },
      { word: "facts", translation: "事实" }
    ],
    collocations: [
      { phrase: "collect data", translation: "收集数据" },
      { phrase: "analyze data", translation: "分析数据" },
      { phrase: "data analysis", translation: "数据分析" }
    ],
    example_sentence: "Researchers collected data from various sources.",
    example_translation: "研究人员从各种来源收集了数据。",
    status: "unlearned"
  },
  {
    word: "debate",
    phonetic: "/dɪˈbeɪt/",
    definition: "a formal discussion on a particular topic",
    chinese_definition: "辩论；争论；讨论",
    synonyms: [
      { word: "discussion", translation: "讨论" },
      { word: "argument", translation: "争论" },
      { word: "dispute", translation: "争端" }
    ],
    collocations: [
      { phrase: "heated debate", translation: "激烈辩论" },
      { phrase: "spark debate", translation: "引发辩论" },
      { phrase: "ongoing debate", translation: "持续辩论" }
    ],
    example_sentence: "The issue sparked a heated public debate.",
    example_translation: "这个问题引发了激烈的公众辩论。",
    status: "unlearned"
  },
  {
    word: "decade",
    phonetic: "/ˈdekeɪd/",
    definition: "a period of ten years",
    chinese_definition: "十年；十年期",
    synonyms: [
      { word: "ten years", translation: "十年" },
      { word: "period", translation: "时期" },
      { word: "era", translation: "时代" }
    ],
    collocations: [
      { phrase: "past decade", translation: "过去十年" },
      { phrase: "over a decade", translation: "十多年" },
      { phrase: "several decades", translation: "几十年" }
    ],
    example_sentence: "Technology has advanced rapidly over the past decade.",
    example_translation: "过去十年中技术迅速发展。",
    status: "unlearned"
  },
  {
    word: "decline",
    phonetic: "/dɪˈklaɪn/",
    definition: "become smaller, weaker, or fewer",
    chinese_definition: "下降；衰退；婉拒",
    synonyms: [
      { word: "decrease", translation: "减少" },
      { word: "deteriorate", translation: "恶化" },
      { word: "fall", translation: "下降" }
    ],
    collocations: [
      { phrase: "rapid decline", translation: "急剧下降" },
      { phrase: "steady decline", translation: "稳定下降" },
      { phrase: "decline in", translation: "下降" }
    ],
    example_sentence: "The company saw a decline in profits last quarter.",
    example_translation: "公司上季度利润有所下降。",
    status: "unlearned"
  },
  {
    word: "deduce",
    phonetic: "/dɪˈdjuːs/",
    definition: "arrive at a conclusion by reasoning",
    chinese_definition: "推断；推论；演绎",
    synonyms: [
      { word: "conclude", translation: "得出结论" },
      { word: "infer", translation: "推断" },
      { word: "reason", translation: "推理" }
    ],
    collocations: [
      { phrase: "deduce from", translation: "从...推断" },
      { phrase: "logically deduce", translation: "逻辑推断" },
      { phrase: "reasonably deduce", translation: "合理推断" }
    ],
    example_sentence: "From the evidence, we can deduce his intentions.",
    example_translation: "从证据中，我们可以推断他的意图。",
    status: "unlearned"
  },
  {
    word: "default",
    phonetic: "/dɪˈfɔːlt/",
    definition: "a preselected option adopted by a computer program",
    chinese_definition: "默认；缺省；不履行",
    synonyms: [
      { word: "standard", translation: "标准的" },
      { word: "automatic", translation: "自动的" },
      { word: "preset", translation: "预设的" }
    ],
    collocations: [
      { phrase: "by default", translation: "默认情况下" },
      { phrase: "default setting", translation: "默认设置" },
      { phrase: "change default", translation: "更改默认" }
    ],
    example_sentence: "The application saves files by default to the desktop.",
    example_translation: "该应用程序默认将文件保存到桌面。",
    status: "unlearned"
  },
  {
    word: "demonstrate",
    phonetic: "/ˈdemənstreɪt/",
    definition: "show or prove something clearly",
    chinese_definition: "展示；证明；示威",
    synonyms: [
      { word: "show", translation: "展示" },
      { word: "prove", translation: "证明" },
      { word: "display", translation: "显示" }
    ],
    collocations: [
      { phrase: "demonstrate ability", translation: "展示能力" },
      { phrase: "clearly demonstrate", translation: "清楚证明" },
      { phrase: "practical demonstration", translation: "实际展示" }
    ],
    example_sentence: "The study demonstrates the benefits of exercise.",
    example_translation: "这项研究证明了运动的益处。",
    status: "unlearned"
  },
  {
    word: "denote",
    phonetic: "/dɪˈnəʊt/",
    definition: "be a sign of; indicate",
    chinese_definition: "表示；指示；意味着",
    synonyms: [
      { word: "indicate", translation: "指示" },
      { word: "signify", translation: "表示" },
      { word: "represent", translation: "代表" }
    ],
    collocations: [
      { phrase: "denote change", translation: "表示变化" },
      { phrase: "commonly denote", translation: "通常表示" },
      { phrase: "denote by", translation: "用...表示" }
    ],
    example_sentence: "The red color often denotes danger.",
    example_translation: "红色通常表示危险。",
    status: "unlearned"
  },
  {
    word: "deny",
    phonetic: "/dɪˈnaɪ/",
    definition: "state that something is not true",
    chinese_definition: "否认；拒绝；克制",
    synonyms: [
      { word: "refuse", translation: "拒绝" },
      { word: "reject", translation: "拒绝" },
      { word: "disclaim", translation: "否认" }
    ],
    collocations: [
      { phrase: "deny allegation", translation: "否认指控" },
      { phrase: "deny access", translation: "拒绝访问" },
      { phrase: "strongly deny", translation: "强烈否认" }
    ],
    example_sentence: "He denied all accusations against him.",
    example_translation: "他否认了对他的所有指控。",
    status: "unlearned"
  },
  {
    word: "detect",
    phonetic: "/dɪˈtekt/",
    definition: "discover or identify the presence of something",
    chinese_definition: "探测；检测；发现",
    synonyms: [
      { word: "discover", translation: "发现" },
      { word: "identify", translation: "识别" },
      { word: "find", translation: "找到" }
    ],
    collocations: [
      { phrase: "detect pattern", translation: "检测模式" },
      { phrase: "detect problem", translation: "发现问题" },
      { phrase: "automatically detect", translation: "自动检测" }
    ],
    example_sentence: "Sensors can detect changes in temperature.",
    example_translation: "传感器可以检测温度变化。",
    status: "unlearned"
  },
  {
    word: "deter",
    phonetic: "/dɪˈtɜːr/",
    definition: "discourage from doing something",
    chinese_definition: "阻止；威慑；打消念头",
    synonyms: [
      { word: "discourage", translation: "阻止" },
      { word: "prevent", translation: "预防" },
      { word: "dissuade", translation: "劝阻" }
    ],
    collocations: [
      { phrase: "deter from", translation: "阻止...做" },
      { phrase: "effectively deter", translation: "有效威慑" },
      { phrase: "fail to deter", translation: "未能阻止" }
    ],
    example_sentence: "High prices may deter potential customers.",
    example_translation: "高价格可能会阻止潜在顾客。",
    status: "unlearned"
  },
  {
    word: "device",
    phonetic: "/dɪˈvaɪs/",
    definition: "a thing made for a particular purpose",
    chinese_definition: "设备；装置；手段",
    synonyms: [
      { word: "instrument", translation: "仪器" },
      { word: "appliance", translation: "器具" },
      { word: "tool", translation: "工具" }
    ],
    collocations: [
      { phrase: "electronic device", translation: "电子设备" },
      { phrase: "mobile device", translation: "移动设备" },
      { phrase: "medical device", translation: "医疗设备" }
    ],
    example_sentence: "The company manufactures medical devices.",
    example_translation: "这家公司制造医疗设备。",
    status: "unlearned"
  },
  {
    word: "devote",
    phonetic: "/dɪˈvəʊt/",
    definition: "give all of something; dedicate",
    chinese_definition: "致力于；奉献；专心",
    synonyms: [
      { word: "dedicate", translation: "奉献" },
      { word: "commit", translation: "承诺" },
      { word: "allocate", translation: "分配" }
    ],
    collocations: [
      { phrase: "devote time", translation: "投入时间" },
      { phrase: "devote oneself to", translation: "致力于" },
      { phrase: "fully devote", translation: "完全奉献" }
    ],
    example_sentence: "She devoted her life to teaching.",
    example_translation: "她毕生致力于教学。",
    status: "unlearned"
  },
  {
    word: "differentiate",
    phonetic: "/ˌdɪfəˈrenʃieɪt/",
    definition: "recognize or identify differences between",
    chinese_definition: "区分；辨别；使分化",
    synonyms: [
      { word: "distinguish", translation: "区分" },
      { word: "discriminate", translation: "辨别" },
      { word: "separate", translation: "分开" }
    ],
    collocations: [
      { phrase: "differentiate between", translation: "区分" },
      { phrase: "clearly differentiate", translation: "清晰区分" },
      { phrase: "differentiate from", translation: "与...区分" }
    ],
    example_sentence: "It's important to differentiate facts from opinions.",
    example_translation: "区分事实和观点很重要。",
    status: "unlearned"
  },
  {
    word: "diminish",
    phonetic: "/dɪˈmɪnɪʃ/",
    definition: "make or become less",
    chinese_definition: "减少；降低；贬低",
    synonyms: [
      { word: "reduce", translation: "减少" },
      { word: "decrease", translation: "降低" },
      { word: "lessen", translation: "减轻" }
    ],
    collocations: [
      { phrase: "significantly diminish", translation: "显著减少" },
      { phrase: "gradually diminish", translation: "逐渐减少" },
      { phrase: "diminish value", translation: "降低价值" }
    ],
    example_sentence: "The company's profits have diminished recently.",
    example_translation: "公司利润最近有所减少。",
    status: "unlearned"
  },
  {
    word: "discard",
    phonetic: "/dɪˈskɑːd/",
    definition: "get rid of; throw away",
    chinese_definition: "丢弃；抛弃；放弃",
    synonyms: [
      { word: "throw away", translation: "扔掉" },
      { word: "reject", translation: "拒绝" },
      { word: "abandon", translation: "放弃" }
    ],
    collocations: [
      { phrase: "discard idea", translation: "放弃想法" },
      { phrase: "discard old", translation: "丢弃旧的" },
      { phrase: "completely discard", translation: "完全抛弃" }
    ],
    example_sentence: "We decided to discard the original plan.",
    example_translation: "我们决定放弃原计划。",
    status: "unlearned"
  },
  {
    word: "discern",
    phonetic: "/dɪˈsɜːn/",
    definition: "perceive or recognize something",
    chinese_definition: "辨别；看出；察觉",
    synonyms: [
      { word: "recognize", translation: "识别" },
      { word: "perceive", translation: "感知" },
      { word: "distinguish", translation: "区分" }
    ],
    collocations: [
      { phrase: "discern pattern", translation: "辨别模式" },
      { phrase: "barely discern", translation: "勉强看出" },
      { phrase: "carefully discern", translation: "仔细辨别" }
    ],
    example_sentence: "It's difficult to discern the truth in this matter.",
    example_translation: "很难在这件事中辨别真相。",
    status: "unlearned"
  },
  {
    word: "discrete",
    phonetic: "/dɪˈskriːt/",
    definition: "individually separate and distinct",
    chinese_definition: "离散的；不连续的；分开的",
    synonyms: [
      { word: "separate", translation: "分开的" },
      { word: "distinct", translation: "明显的" },
      { word: "individual", translation: "独立的" }
    ],
    collocations: [
      { phrase: "discrete units", translation: "离散单元" },
      { phrase: "discrete stages", translation: "离散阶段" },
      { phrase: "discrete values", translation: "离散值" }
    ],
    example_sentence: "The project consists of several discrete phases.",
    example_translation: "该项目由几个独立的阶段组成。",
    status: "unlearned"
  },
  {
    word: "disperse",
    phonetic: "/dɪˈspɜːs/",
    definition: "distribute or spread over a wide area",
    chinese_definition: "分散；散开；传播",
    synonyms: [
      { word: "scatter", translation: "散开" },
      { word: "spread", translation: "传播" },
      { word: "distribute", translation: "分发" }
    ],
    collocations: [
      { phrase: "disperse crowd", translation: "驱散人群" },
      { phrase: "disperse evenly", translation: "均匀分散" },
      { phrase: "gradually disperse", translation: "逐渐散开" }
    ],
    example_sentence: "The police worked to disperse the crowd.",
    example_translation: "警察努力驱散人群。",
    status: "unlearned"
  },
  {
    word: "displace",
    phonetic: "/dɪsˈpleɪs/",
    definition: "move from its proper place; force to leave",
    chinese_definition: "取代；转移；驱逐",
    synonyms: [
      { word: "replace", translation: "替换" },
      { word: "move", translation: "移动" },
      { word: "shift", translation: "转移" }
    ],
    collocations: [
      { phrase: "displace from", translation: "从...转移" },
      { phrase: "displace people", translation: "迁移人口" },
      { phrase: "gradually displace", translation: "逐渐取代" }
    ],
    example_sentence: "Automation has displaced many traditional jobs.",
    example_translation: "自动化已经取代了许多传统工作。",
    status: "unlearned"
  },
  {
    word: "disregard",
    phonetic: "/ˌdɪsrɪˈɡɑːd/",
    definition: "pay no attention to; ignore",
    chinese_definition: "忽视；不理会；无视",
    synonyms: [
      { word: "ignore", translation: "忽视" },
      { word: "neglect", translation: "忽略" },
      { word: "overlook", translation: "无视" }
    ],
    collocations: [
      { phrase: "disregard advice", translation: "无视建议" },
      { phrase: "completely disregard", translation: "完全忽视" },
      { phrase: "disregard rules", translation: "无视规则" }
    ],
    example_sentence: "You cannot disregard the safety regulations.",
    example_translation: "你不能无视安全法规。",
    status: "unlearned"
  },
  {
    word: "distinct",
    phonetic: "/dɪˈstɪŋkt/",
    definition: "recognizably different in nature from something else",
    chinese_definition: "独特的；明显的；截然不同的",
    synonyms: [
      { word: "different", translation: "不同的" },
      { word: "unique", translation: "独特的" },
      { word: "separate", translation: "分开的" }
    ],
    collocations: [
      { phrase: "distinct feature", translation: "独特特征" },
      { phrase: "clearly distinct", translation: "明显不同" },
      { phrase: "distinct from", translation: "与...截然不同" }
    ],
    example_sentence: "Each culture has distinct traditions.",
    example_translation: "每种文化都有独特的传统。",
    status: "unlearned"
  },
  {
    word: "diverge",
    phonetic: "/daɪˈvɜːdʒ/",
    definition: "separate from another route or go in a different direction",
    chinese_definition: "分歧；偏离；分叉",
    synonyms: [
      { word: "separate", translation: "分开" },
      { word: "branch", translation: "分支" },
      { word: "deviate", translation: "偏离" }
    ],
    collocations: [
      { phrase: "diverge from", translation: "偏离" },
      { phrase: "opinions diverge", translation: "意见分歧" },
      { phrase: "gradually diverge", translation: "逐渐分歧" }
    ],
    example_sentence: "The two paths diverge at the crossroads.",
    example_translation: "两条路在十字路口分岔。",
    status: "unlearned"
  },
  {
    word: "domain",
    phonetic: "/dəˈmeɪn/",
    definition: "an area of territory or knowledge",
    chinese_definition: "领域；领地；范围",
    synonyms: [
      { word: "field", translation: "领域" },
      { word: "realm", translation: "范围" },
      { word: "territory", translation: "领土" }
    ],
    collocations: [
      { phrase: "domain knowledge", translation: "领域知识" },
      { phrase: "public domain", translation: "公共领域" },
      { phrase: "expert domain", translation: "专业领域" }
    ],
    example_sentence: "She is an expert in the domain of artificial intelligence.",
    example_translation: "她是人工智能领域的专家。",
    status: "unlearned"
  },
  {
    word: "dominate",
    phonetic: "/ˈdɒmɪneɪt/",
    definition: "have power or influence over; be the most important",
    chinese_definition: "支配；统治；主导",
    synonyms: [
      { word: "control", translation: "控制" },
      { word: "rule", translation: "统治" },
      { word: "lead", translation: "领导" }
    ],
    collocations: [
      { phrase: "dominate market", translation: "主导市场" },
      { phrase: "completely dominate", translation: "完全主导" },
      { phrase: "globally dominate", translation: "全球主导" }
    ],
    example_sentence: "A few companies dominate the tech industry.",
    example_translation: "少数几家公司主导着科技行业。",
    status: "unlearned"
  },
  {
    word: "drastic",
    phonetic: "/ˈdræstɪk/",
    definition: "likely to have a strong effect",
    chinese_definition: "激烈的；极端的；严厉的",
    synonyms: [
      { word: "extreme", translation: "极端的" },
      { word: "severe", translation: "严重的" },
      { word: "radical", translation: "激进的" }
    ],
    collocations: [
      { phrase: "drastic change", translation: "剧烈变化" },
      { phrase: "drastic measure", translation: "极端措施" },
      { phrase: "drastic reduction", translation: "大幅减少" }
    ],
    example_sentence: "The company implemented drastic cost-cutting measures.",
    example_translation: "公司实施了极端的成本削减措施。",
    status: "unlearned"
  },
  {
    word: "duration",
    phonetic: "/djʊˈreɪʃn/",
    definition: "the time during which something continues",
    chinese_definition: "持续时间；期间；期间",
    synonyms: [
      { word: "length", translation: "长度" },
      { word: "period", translation: "时期" },
      { word: "span", translation: "跨度" }
    ],
    collocations: [
      { phrase: "for the duration", translation: "在整个期间" },
      { phrase: "short duration", translation: "短时间" },
      { phrase: "duration of", translation: "...的持续时间" }
    ],
    example_sentence: "The project's duration was three years.",
    example_translation: "该项目持续了三年。",
    status: "unlearned"
  },
  {
    word: "dynamic",
    phonetic: "/daɪˈnæmɪk/",
    definition: "characterized by constant change or progress",
    chinese_definition: "动态的；有活力的；不断变化的",
    synonyms: [
      { word: "active", translation: "活跃的" },
      { word: "energetic", translation: "充满活力的" },
      { word: "changing", translation: "变化的" }
    ],
    collocations: [
      { phrase: "dynamic environment", translation: "动态环境" },
      { phrase: "highly dynamic", translation: "高度动态" },
      { phrase: "dynamic process", translation: "动态过程" }
    ],
    example_sentence: "We live in a rapidly changing, dynamic world.",
    example_translation: "我们生活在一个快速变化的动态世界。",
    status: "unlearned"
  },
  {
    word: "economy",
    phonetic: "/ɪˈkɒnəmi/",
    definition: "the state of a country or region in terms of production and consumption",
    chinese_definition: "经济；节约；经济状况",
    synonyms: [
      { word: "financial system", translation: "金融系统" },
      { word: "market", translation: "市场" },
      { word: "financial state", translation: "金融状况" }
    ],
    collocations: [
      { phrase: "global economy", translation: "全球经济" },
      { phrase: "market economy", translation: "市场经济" },
      { phrase: "boost economy", translation: "提振经济" }
    ],
    example_sentence: "The global economy is facing significant challenges.",
    example_translation: "全球经济正面临重大挑战。",
    status: "unlearned"
  }
];
