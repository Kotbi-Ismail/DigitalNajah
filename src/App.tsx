import { useEffect, useState, type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

const whatsappNumber = '212615524195';

interface Product {
  name: string;
  duration: string;
  emoji: string;
  features: string[];
  originalPrice: number;
  price: number;
  accentClassName: string;
}

interface NavItem {
  label: string;
  href: string;
}

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

interface WhyFeature {
  icon: string;
  title: string;
  description: string;
  accentClassName: string;
}

interface WhyCardProps {
  feature: WhyFeature;
  index: number;
}

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

interface StepCardProps {
  step: Step;
  index: number;
}

type WhatsAppIconProps = ComponentPropsWithoutRef<'svg'>;

const navItems: NavItem[] = [
  { label: 'المنتجات', href: '#products' },
  { label: 'كيفاش', href: '#how-it-works' },
  { label: 'تواصل معنا', href: '#contact' },
];

const products: Product[] = [
  {
    name: 'ChatGPT Plus',
    duration: 'سنة كاملة',
    emoji: '🤖',
    features: [
      'وصول كامل لأقوى أدوات الذكاء الاصطناعي',
      'مناسب للدراسة والخدمة وصناعة المحتوى',
      'سرعة أعلى وتجربة أكثر سلاسة',
      'تفعيل سريع مع دعم مباشر على واتساب',
    ],
    originalPrice: 2400,
    price: 280,
    accentClassName:
      'from-sky-500/30 via-cyan-400/10 to-transparent shadow-[0_20px_60px_rgba(56,189,248,0.18)]',
  },
  {
    name: 'Canva Pro',
    duration: 'شهري',
    emoji: '🎨',
    features: [
      'قوالب وتصاميم بريميوم بدون حدود',
      'مناسب للطلبة والفريلانسر وصناع المحتوى',
      'أدوات إزالة الخلفية وتحرير سريع',
      'اشتغال سهل على الهاتف والحاسوب',
    ],
    originalPrice: 170,
    price: 25,
    accentClassName:
      'from-fuchsia-500/30 via-violet-400/10 to-transparent shadow-[0_20px_60px_rgba(168,85,247,0.18)]',
  },
  {
    name: 'Google AI Pro',
    duration: 'شهري',
    emoji: '✨',
    features: [
      'استفادة من أدوات Google AI الحديثة',
      'مفيد للبحث والكتابة وتنظيم الأفكار',
      'تجربة مرنة للاستخدام اليومي',
      'تأكيد سريع بعد إرسال الطلب',
    ],
    originalPrice: 200,
    price: 50,
    accentClassName:
      'from-emerald-500/30 via-green-400/10 to-transparent shadow-[0_20px_60px_rgba(16,185,129,0.18)]',
  },
  {
    name: 'Spotify Premium',
    duration: 'شهري',
    emoji: '🎵',
    features: [
      'موسيقى بلا إعلانات نهائياً',
      'تحميل الأغاني والاستماع أوفلاين',
      'جودة صوت أفضل في جميع الأجهزة',
      'مناسب للاستعمال اليومي بثمن شبابي',
    ],
    originalPrice: 50,
    price: 20,
    accentClassName:
      'from-emerald-500/30 via-lime-400/10 to-transparent shadow-[0_20px_60px_rgba(34,197,94,0.18)]',
  },
  {
    name: 'Adobe Creative Cloud',
    duration: 'شهري',
    emoji: '🧰',
    features: [
      'مجموعة أدوات احترافية للمصممين والمونتير',
      'مناسب للبداية أو تطوير الخدمة ديالك',
      'حل اقتصادي بدل السعر الرسمي المرتفع',
      'تفعيل سريع ومساعدة في أول استعمال',
    ],
    originalPrice: 600,
    price: 100,
    accentClassName:
      'from-indigo-500/30 via-violet-400/10 to-transparent shadow-[0_20px_60px_rgba(99,102,241,0.18)]',
  },
  {
    name: 'YouTube Premium',
    duration: 'شهري',
    emoji: '▶️',
    features: [
      'مشاهدة بلا إعلانات على جميع الفيديوهات',
      'تشغيل في الخلفية وتحميل المحتوى',
      'تجربة أكثر راحة على الهاتف',
      'خدمة سريعة بتواصل مباشر على واتساب',
    ],
    originalPrice: 45,
    price: 15,
    accentClassName:
      'from-rose-500/30 via-red-400/10 to-transparent shadow-[0_20px_60px_rgba(244,63,94,0.18)]',
  },
];

const whyUsItems: WhyFeature[] = [
  {
    icon: '✅',
    title: 'أسعار أرخص بـ 80%',
    description: 'نوفر نفس الاشتراكات بثمن مناسب أكثر للشباب المغربي.',
    accentClassName: 'from-sky-500/25 to-cyan-400/10',
  },
  {
    icon: '⚡',
    title: 'تفعيل فوري',
    description: 'من بعد التأكيد كنبدأو التفعيل مباشرة بلا تعقيد.',
    accentClassName: 'from-violet-500/25 to-fuchsia-400/10',
  },
  {
    icon: '🔒',
    title: 'دفع آمن 100%',
    description: 'تعامل واضح، تواصل مباشر، وخطوات طلب مفهومة.',
    accentClassName: 'from-emerald-500/25 to-green-400/10',
  },
  {
    icon: '🇲🇦',
    title: 'خدمة مغربية',
    description: 'دعم محلي بالدارجة وفهم حقيقي لاحتياجات السوق المغربي.',
    accentClassName: 'from-sky-500/25 to-emerald-400/10',
  },
];

const steps: Step[] = [
  {
    number: 1,
    title: 'اختار الاشتراك',
    description: 'شوف العرض اللي مناسب ليك وحدد الخدمة اللي باغي تبدأ بها.',
    icon: '🛒',
  },
  {
    number: 2,
    title: 'ادفع بأمان',
    description: 'راسلنا على واتساب وخد تفاصيل الطلب والدفع بطريقة واضحة.',
    icon: '💳',
  },
  {
    number: 3,
    title: 'استلم فوراً',
    description: 'من بعد التأكيد كيوصلك التفعيل بسرعة وبدعم مباشر عند الحاجة.',
    icon: '🚀',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const createWhatsAppLink = (message: string): string =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const calculateSavings = (originalPrice: number, currentPrice: number): number =>
  Math.round((1 - currentPrice / originalPrice) * 100);

const scrollToSection = (id: string): void => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </Reveal>
  );
}

function WhatsAppIcon(props: WhatsAppIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2c-5.43 0-9.84 4.41-9.84 9.84 0 1.74.46 3.45 1.32 4.95L2 22l5.37-1.4a9.78 9.78 0 0 0 4.66 1.19h.01c5.43 0 9.84-4.41 9.84-9.84a9.77 9.77 0 0 0-2.83-7.04Zm-7.02 15.2h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.18.83.85-3.1-.2-.32a8.13 8.13 0 0 1-1.25-4.36c0-4.48 3.65-8.13 8.14-8.13 2.17 0 4.2.84 5.74 2.38a8.07 8.07 0 0 1 2.38 5.75c0 4.48-3.65 8.13-8.13 8.13Zm4.46-6.1c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.41-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.02.4 1.37.51.57.18 1.08.16 1.48.1.45-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto max-w-7xl rounded-[28px] border transition-all duration-300 ${
          isScrolled
            ? 'border-cyan-400/20 bg-slate-950/75 shadow-[0_14px_50px_rgba(2,6,23,0.65)] backdrop-blur-2xl'
            : 'border-white/10 bg-white/5 backdrop-blur-xl'
        }`}
      >
        <div className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="flex items-center justify-between gap-4 text-right sm:justify-start"
          >
            <div className="text-right">
              <div className="text-lg font-black tracking-wide text-white">SubsMaroc 🇲🇦</div>
              <div className="text-sm text-slate-400">اشتراكات رقمية للشباب المغربي</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-sky-400/30 via-violet-400/20 to-emerald-400/20 text-xl shadow-[0_0_30px_rgba(56,189,248,0.22)]">
              ✦
            </div>
          </a>

          <nav className="flex items-center justify-between gap-3 text-sm font-medium text-slate-300 sm:justify-end sm:gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </motion.div>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-10 sm:pb-24 sm:pt-16">
      <AnimatedGradientMesh />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-xl">
            عروض حقيقية بأسعار شبابية
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.15] text-white sm:text-5xl lg:text-7xl">
            اشتراكات بريميوم بأسعار مغربية 🇲🇦
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            وفر أكثر من 80% على أحسن اشتراكات العالم
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.button
              type="button"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('products')}
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-400 via-violet-500 to-emerald-400 px-7 py-4 text-base font-extrabold text-slate-950 shadow-[0_20px_60px_rgba(14,165,233,0.28)]"
            >
              شوف العروض
            </motion.button>

            <motion.a
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href={createWhatsAppLink('سلام، بغيت نعرف أكثر على الاشتراكات المتوفرة عندكم.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10"
            >
              <WhatsAppIcon className="h-5 w-5 text-emerald-400" />
              تواصل سريع
            </motion.a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard value="80%+" label="توفير على الأسعار الرسمية" />
            <StatCard value="24/7" label="رد سريع على واتساب" />
            <StatCard value="فوري" label="تأكيد وتفعيل في أسرع وقت" />
          </div>
        </Reveal>

        <Reveal className="lg:mr-auto" delay={0.15}>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-neon backdrop-blur-2xl sm:p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-violet-500/10 to-emerald-500/10" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/50 p-4">
                <div>
                  <p className="text-sm text-slate-400">العرض الأكثر طلباً</p>
                  <h3 className="mt-1 text-xl font-black text-white">ChatGPT Plus</h3>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-bold text-emerald-300">
                  سنة كاملة
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <HeroMiniCard
                  title="تفعيل سريع"
                  value="< 10 د"
                  accentClassName="from-sky-500/25 to-cyan-400/10"
                />
                <HeroMiniCard
                  title="أحسن توفير"
                  value="88%"
                  accentClassName="from-violet-500/25 to-fuchsia-400/10"
                />
                <HeroMiniCard
                  title="خدمة مغربية"
                  value="100%"
                  accentClassName="from-emerald-500/25 to-green-400/10"
                />
                <HeroMiniCard
                  title="واتساب مباشر"
                  value="1 Click"
                  accentClassName="from-sky-500/25 to-emerald-400/10"
                />
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-sm text-slate-400">جاهز تطلب؟</p>
                <p className="mt-2 text-lg font-bold leading-8 text-slate-100">
                  اختار الاشتراك اللي مناسب ليك، راسلنا مباشرة، وخد الخدمة ديالك بثمن
                  شبابي ودعم محلي.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AnimatedGradientMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute right-[-8rem] top-8 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl"
        animate={{ x: [0, -30, 10, 0], y: [0, 24, -18, 0], scale: [1, 1.12, 0.94, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[-7rem] top-36 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl"
        animate={{ x: [0, 20, -24, 0], y: [0, -18, 22, 0], scale: [0.95, 1.08, 1, 0.95] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"
        animate={{ x: [0, -12, 18, 0], y: [0, -24, 10, 0], scale: [1, 0.92, 1.08, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.08),transparent_40%),linear-gradient(180deg,rgba(2,6,23,0.2),rgba(2,6,23,0.92))]" />
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
    >
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-2 text-sm leading-6 text-slate-300">{label}</div>
    </motion.div>
  );
}

function HeroMiniCard({
  title,
  value,
  accentClassName,
}: {
  title: string;
  value: string;
  accentClassName: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`rounded-3xl border border-white/10 bg-gradient-to-br ${accentClassName} bg-slate-950/40 p-4 backdrop-blur-xl`}
    >
      <p className="text-sm text-slate-300">{title}</p>
      <p className="mt-2 text-2xl font-black text-white">{value}</p>
    </motion.div>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="المنتجات"
          title="اختار الاشتراك اللي مناسب ليك"
          description="كل عرض واضح فالسعر، فيه المميزات الأساسية، وزر مباشر على واتساب باش تكمل الطلب بسرعة."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: ProductCardProps) {
  const savings = calculateSavings(product.originalPrice, product.price);

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
    >
      <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${product.accentClassName}`} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(2,6,23,0.65))]" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-2xl shadow-[0_0_30px_rgba(255,255,255,0.06)]">
              {product.emoji}
            </div>
            <div>
              <h3 className="text-xl font-black text-white">{product.name}</h3>
              <p className="mt-1 text-sm text-slate-300">{product.duration}</p>
            </div>
          </div>

          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm font-bold text-emerald-300">
            وفر {savings}%
          </span>
        </div>

        <div dir="ltr" className="mt-6 flex items-end gap-3 text-left">
          <div className="text-4xl font-black text-white">{product.price} MAD</div>
          <div className="pb-1 text-base text-slate-400 line-through">
            {product.originalPrice} MAD
          </div>
        </div>

        <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-200">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-1 text-emerald-400">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <motion.a
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          href={createWhatsAppLink(`سلام، بغيت نطلب ${product.name} - ${product.duration}.`)}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 px-5 py-4 text-base font-extrabold text-slate-950 shadow-[0_16px_40px_rgba(34,197,94,0.25)] transition group-hover:shadow-[0_20px_50px_rgba(34,197,94,0.3)]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          اطلب عبر واتساب
        </motion.a>
      </div>
    </motion.article>
  );
}

function WhyUsSection() {
  return (
    <section id="why-us" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="علاش حنا"
          title="ثقة، سرعة، وثمن مناسب"
          description="بنينّا الخدمة على احتياجات الشباب المغربي: أثمنة واضحة، تواصل سريع، وتجربة شراء مريحة."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {whyUsItems.map((feature, index) => (
            <WhyCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ feature, index }: WhyCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-2xl"
    >
      <div
        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${feature.accentClassName} text-3xl shadow-[0_0_30px_rgba(255,255,255,0.05)]`}
      >
        {feature.icon}
      </div>
      <h3 className="mt-5 text-xl font-black text-white">{feature.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
    </motion.article>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="كيفاش"
          title="3 خطوات وكلشي واجد"
          description="الطلب بسيط جداً: تختار، تواصل، وكيتم التفعيل بسرعة من غير تعقيد."
        />

        <div className="relative">
          <div className="absolute left-1/2 top-16 hidden h-px w-[calc(100%-10rem)] -translate-x-1/2 bg-gradient-to-r from-sky-400/0 via-sky-400/60 to-emerald-400/0 md:block" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: StepCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 rounded-[30px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/20 via-violet-500/15 to-emerald-500/20 text-2xl">
          {step.icon}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-sky-400/10 text-lg font-black text-cyan-300">
          {step.number}
        </div>
      </div>

      <h3 className="mt-6 text-2xl font-black text-white">{step.title}</h3>
      <p className="mt-3 text-base leading-8 text-slate-300">{step.description}</p>
    </motion.article>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 p-7 shadow-neon backdrop-blur-2xl sm:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(139,92,246,0.08),rgba(16,185,129,0.12))]" />

            <div className="relative text-center">
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-300">
                تواصل معنا
              </span>
              <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">تواصل معنا</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                راسلنا مباشرة على واتساب باش نأكدوا ليك الثمن، نوابوك على الأسئلة، ونبدؤوا
                التفعيل بسرعة.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4">
                <motion.a
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  href={createWhatsAppLink('سلام، بغيت نطلب اشتراك من عندكم.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-500 px-8 py-4 text-lg font-black text-slate-950 shadow-[0_18px_50px_rgba(34,197,94,0.25)]"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  تواصل عبر واتساب
                </motion.a>

                <div
                  dir="ltr"
                  className="rounded-full border border-white/10 bg-slate-950/60 px-5 py-3 text-base font-semibold tracking-wide text-slate-200"
                >
                  +212 615524195
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-24 pt-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 rounded-[28px] border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-xl sm:flex-row sm:text-right">
        <div>
          <div className="text-lg font-black text-white">SubsMaroc 🇲🇦</div>
          <div className="mt-1 text-sm text-slate-400">اشتراكات بريميوم بأسعار مغربية</div>
        </div>
        <p className="text-sm text-slate-400">جميع الحقوق محفوظة 2025</p>
      </div>
    </footer>
  );
}

function FloatingWhatsAppButton() {
  return (
    <motion.a
      href={createWhatsAppLink('سلام، بغيت نعرف شنو كاين من العروض المتوفرة.')}
      target="_blank"
      rel="noreferrer"
      aria-label="راسلنا على واتساب"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.06, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-gradient-to-r from-emerald-400 to-green-500 text-slate-950 shadow-[0_18px_45px_rgba(34,197,94,0.35)]"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </motion.a>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    document.title = 'SubsMaroc | اشتراكات بريميوم بأسعار مغربية';
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950 font-cairo text-white">
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_26%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.14),transparent_28%),linear-gradient(180deg,#020617_0%,#050816_40%,#020617_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[linear-gradient(180deg,rgba(15,23,42,0.18),transparent)]" />

        <Navbar />

        <main>
          <HeroSection />
          <ProductsSection />
          <WhyUsSection />
          <HowItWorksSection />
          <ContactSection />
        </main>

        <Footer />
        <FloatingWhatsAppButton />
      </div>
    </div>
  );
}
