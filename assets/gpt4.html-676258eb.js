import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as p,c as a,e as t}from"./app-8fd31ce6.js";const T={},P=t('<p><strong>GPT-4是一款OpenAI研发的多模态预训练大模型，于2023年3月15日发布，是ChatGPT的升级版本，它能接受图像和文本输入，再输出正确的文本回复。</strong></p><p>GPT-4实现了以下几个方面的飞跃式提升：强大的识图能力；文字输入限制提升至2.5万字；回答准确性显著提高；能够生成歌词、创意文本，实现风格变化。实验表明，GPT-4在各种专业测试和学术基准上的表现与人类水平相当。</p><h2 id="历程" tabindex="-1"><a class="header-anchor" href="#历程" aria-hidden="true">#</a> 历程</h2><blockquote><p>2021-2022年，OpenAI 重建了整个深度学习堆栈，并与 Azure 一起为其工作负载从头开始设计了一台超级计算机。2022年，OpenAI 在训练 GPT-3.5 时第一次尝试运行了该超算系统，之后他们又陆续发现并修复了一些错误，改进了其理论基础。这些改进的结果是 GPT-4 的训练运行获得了前所未有的稳定，以至于 OpenAI 能够提前准确预测 GPT-4 的训练性能，它也是第一个实现这一点的大模型。</p></blockquote><blockquote><p>OpenAI 花了6个月的时间使用对抗性测试程序和 ChatGPT 的经验教训对GPT-4进行迭代调整 ，从而在真实性、可控性等方面取得了有史以来最好的结果。</p></blockquote><blockquote><p>2022年8月，完成对GPT-4 的训练，剩下的时间都在进行微调提升，以及最重要的去除危险内容生成的工作。</p></blockquote><blockquote><p>2023年3月15日，OpenAI发布了GPT-4。</p></blockquote><h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2><p>GPT-4 实现了以下几个方面的飞跃式提升：强大的识图能力；文字输入限制提升至 2.5 万字；回答准确性显著提高；能够生成歌词、创意文本，实现风格变化。</p><p>GPT-4 是一个大型多模态模型，能接受图像和文本输入，再输出正确的文本回复。实验表明，GPT-4 在各种专业测试和学术 基准上的表现与人类水平相当。例如，它通过了模拟律师考试，且分数在应试者的前 10% 左右；相比之下，GPT-3.5 的得分在倒数 10% 左右。</p><p>GPT-4 可以接受文本和图像形式的 prompt，新能力与纯文本设置并行，允许用户指定任何视觉或语言任务。</p><p>具体来说，它在人类给定由散布的文本和图像组成的输入的情况下生成相应的文本输出（自然语言、代码等）。在一系列领域 —— 包括带有文本和照片的文档、图表或屏幕截图上 ——GPT-4 展示了与纯文本输入类似的功能。此外，它还可以通过为纯文本 语言模型开发的测试时间技术得到增强，包括少样本和思维链 prompt。</p><p>GPT-4 在 TruthfulQA 等外部 基准测试方面也取得了进展，OpenAI 测试了模型将事实与错误陈述的对抗性选择区分开的能力。</p><p>GPT-4 的一大重点是建立了一个可预测扩展的 深度学习栈。主要原因是，对于像 GPT-4 这样的大型训练，进行广泛的特定模型调整是不可行的。团队开发了基础设施和优化，在多种规模下都有可预测的行为。为了验证这种可扩展性，他们提前准确地预测了 GPT-4 在内部代码库（不属于训练集）上的最终损失，方法是通过使用相同的方法训练的模型进行推断，但使用的计算量为 1/10000。现在，OpenAI 可以准确地预测在训练过程中优化的指标（损失）。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>GPT-4 发布后，OpenAI 直接升级了 ChatGPT。ChatGPT Plus 订阅者可以在 chat.openai.com 上获得具有使用上限的 GPT-4 访问权限。</p><p>要访问 GPT-4 API（它使用与 gpt-3.5-turbo 相同的 ChatCompletions API），用户可以注册等待。OpenAI 会邀请部分开发者体验。</p><p>获得访问权限后，用户目前可以向 GPT-4 模型发出纯文本请求（图像输入仍处于有限的 alpha 阶段）。至于价格方面，定价为每 1k 个 prompt token 0.03 美元，每 1k 个 completion token 0.06 美元。默认速率限制为每分钟 40k 个 token 和每分钟 200 个请求。</p><p>GPT-4 的上下文长度为 8,192 个 token。OpenAI 还提供了 32,768 个 token 上下文（约 50 页文本）版本的有限访问，该版本也将随着时间自动更新（当前版本 gpt-4-32k-0314，也支持到 6 月 14 日)。定价为每 1K prompt token 0.06 美元和每 1k completion token 0.12 美元。</p><h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2><p>GPT-3.5 和 GPT-4 之间的区别很微妙。当任务的复杂性达到足够的阈值时，差异就会出现 ——GPT-4 比 GPT-3.5 更可靠、更有创意，并且能够处理更细微的指令。</p><p>OpenAI 还在为 机器学习模型设计的传统 基准上评估了 GPT-4。GPT-4 大大优于现有的大型 语言模型，以及大多数 SOTA 模型。</p><p>许多现有的机器学习 基准测试都是用英语编写的。为了初步了解 GPT-4 在其他语言上的能力，研究团队使用 Azure Translate 将 MMLU 基准 —— 一套涵盖 57 个主题的 14000 个多项选择题 —— 翻译成多种语言。在测试的 26 种语言的 24 种中，GPT-4 优于 GPT-3.5 和其他大 语言模型（Chinchilla、PaLM）的英语语言性能。</p><p>总的来说，GPT-4 相对于以前的模型（经过多次迭代和改进）已经显著减轻了幻觉问题。在 OpenAI 的内部对抗性真实性评估中，GPT-4 的得分比最新的 GPT-3.5 模型高 40%。</p><h2 id="局限性" tabindex="-1"><a class="header-anchor" href="#局限性" aria-hidden="true">#</a> 局限性</h2><p>GPT-3.5 和 GPT-4 之间的区别很微妙。当任务的复杂性达到足够的阈值时，差异就会出现 ——GPT-4 比 GPT-3.5 更可靠、更有创意，并且能够处理更细微的指令。</p><p>OpenAI 还在为 机器学习模型设计的传统 基准上评估了 GPT-4。GPT-4 大大优于现有的大型 语言模型，以及大多数 SOTA 模型。</p><p>许多现有的机器学习 基准测试都是用英语编写的。为了初步了解 GPT-4 在其他语言上的能力，研究团队使用 Azure Translate 将 MMLU 基准 —— 一套涵盖 57 个主题的 14000 个多项选择题 —— 翻译成多种语言。在测试的 26 种语言的 24 种中，GPT-4 优于 GPT-3.5 和其他大 语言模型（Chinchilla、PaLM）的英语语言性能。</p><p>总的来说，GPT-4 相对于以前的模型（经过多次迭代和改进）已经显著减轻了幻觉问题。在 OpenAI 的内部对抗性真实性评估中，GPT-4 的得分比最新的 GPT-3.5 模型高 40%。</p><h2 id="风控" tabindex="-1"><a class="header-anchor" href="#风控" aria-hidden="true">#</a> 风控</h2><p>GPT-3.5 和 GPT-4 之间的区别很微妙。当任务的复杂性达到足够的阈值时，差异就会出现 ——GPT-4 比 GPT-3.5 更可靠、更有创意，并且能够处理更细微的指令。</p><p>OpenAI 还在为 机器学习模型设计的传统 基准上评估了 GPT-4。GPT-4 大大优于现有的大型 语言模型，以及大多数 SOTA 模型。</p><p>许多现有的机器学习 基准测试都是用英语编写的。为了初步了解 GPT-4 在其他语言上的能力，研究团队使用 Azure Translate 将 MMLU 基准 —— 一套涵盖 57 个主题的 14000 个多项选择题 —— 翻译成多种语言。在测试的 26 种语言的 24 种中，GPT-4 优于 GPT-3.5 和其他大 语言模型（Chinchilla、PaLM）的英语语言性能。</p><p>总的来说，GPT-4 相对于以前的模型（经过多次迭代和改进）已经显著减轻了幻觉问题。在 OpenAI 的内部对抗性真实性评估中，GPT-4 的得分比最新的 GPT-3.5 模型高 40%。</p><p>来自搜狗百科 链接：https://baike.sogou.com/v214880344.htm?fromTitle=GPT4</p>',35),n=[P];function o(G,r){return p(),a("div",null,n)}const i=e(T,[["render",o],["__file","gpt4.html.vue"]]);export{i as default};
