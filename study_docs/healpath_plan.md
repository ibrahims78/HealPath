# خطة العمل الاحترافية — HealPath Web Application
### HealPath Smart Hospital — Project Execution Plan
**تاريخ الإعداد:** مايو 2026
**صاحب المشروع:** إبراهيم
**نوع المشروع:** تطبيق ويب — حاوية Docker مكتفية ذاتياً

---

## 1. المكدس التقني المعتمد (Tech Stack)

### 1.1 هيكل حاوية Docker

```
docker-compose.yml
├── 🌐 nginx          — Reverse Proxy + SSL
├── ⚛️  nextjs         — Frontend (React/Next.js)
├── 🟢 api            — Backend (Node.js + Express)
├── 🐘 postgres       — قاعدة البيانات
└── 📁 volumes
    ├── postgres_data  — بيانات قاعدة البيانات (دائمة)
    └── uploads        — الملفات المرفوعة (صور، PDFs)
```

> كل البيانات والملفات محفوظة داخل Docker Volumes — لا اعتماد على أي خدمة خارجية.

### 1.2 تفصيل التقنيات

| المكوّن | التقنية | السبب |
|---|---|---|
| **الواجهة الأمامية** | Next.js 14 (App Router) | SSR + SPA + أداء عالٍ + RTL |
| **إدارة الحالة** | Zustand + React Query | سرعة وبساطة |
| **تصميم الواجهة** | Tailwind CSS + shadcn/ui | حديث + قابل للتخصيص |
| **الواجهة الخلفية** | Node.js + Express.js | سرعة التطوير |
| **قاعدة البيانات** | PostgreSQL 16 | موثوقية + بيانات طبية |
| **ORM** | Prisma | سهولة التعامل مع DB |
| **المصادقة** | JWT + bcrypt | معيار الصناعة |
| **المساعد الذكي** | OpenAI API (GPT-4 + Vision) | تحليل الأعراض والتحاليل |
| **تخزين الملفات** | Local Volume (Docker) | مكتفٍ ذاتياً — لا S3 |
| **الإشعارات** | Nodemailer | إشعارات البريد |
| **Reverse Proxy** | Nginx | توجيه الطلبات + SSL |
| **النشر النهائي** | Docker + Docker Compose | حاوية واحدة قابلة للنقل |

---

## 2. مخطط قاعدة البيانات (Database Schema)

```sql
-- المرضى
USERS
├── id (UUID)
├── name, email, password_hash, phone
└── created_at

-- موظفو المستشفى (4 أدوار)
HOSPITAL_STAFF
├── id (UUID)
├── name, email, password_hash
├── role: ENUM(admin, doctor, pharmacy, hr)
├── department_id (FK → DEPARTMENTS, للأطباء فقط)
├── specialization, experience_years, bio
├── photo_path (مسار الصورة في Volume)
└── created_at

-- الأقسام الطبية
DEPARTMENTS
├── id, name, description, icon
└── is_active

-- جدول دوام الأطباء
DOCTOR_SCHEDULES
├── id, doctor_id (FK)
├── day_of_week: ENUM(MON..SUN)
├── start_time, end_time
└── slot_duration_minutes

-- الحجوزات
APPOINTMENTS
├── id (UUID)
├── patient_id (FK → USERS)
├── doctor_id (FK → HOSPITAL_STAFF)
├── appointment_date, appointment_time
├── status: ENUM(pending, confirmed, completed, cancelled)
├── notes, cancellation_reason
└── created_at

-- الأدوية
MEDICINES
├── id, name, scientific_name
├── description, category, usage_instructions
├── price, stock_quantity
├── image_path (مسار الصورة في Volume)
└── is_available

-- طلبات الصيدلية
ORDERS
├── id (UUID), patient_id (FK)
├── status: ENUM(pending, confirmed, delivered, cancelled)
├── total_price, delivery_type: ENUM(pickup, delivery)
└── created_at

-- عناصر الطلب
ORDER_ITEMS
├── id, order_id (FK), medicine_id (FK)
└── quantity, unit_price

-- الشواغر الوظيفية
JOB_LISTINGS
├── id, title, department, contract_type
├── description, requirements
├── is_active
└── created_at, created_by (FK → HOSPITAL_STAFF)

-- طلبات التوظيف
JOB_APPLICATIONS
├── id, listing_id (FK)
├── applicant_name, email, phone
├── cv_path (مسار PDF في Volume)
├── cover_letter
└── status: ENUM(new, reviewed, accepted, rejected), created_at

-- المقالات التثقيفية
ARTICLES
├── id, title, content, excerpt
├── image_path, tags
├── created_by (FK → HOSPITAL_STAFF)
└── created_at, is_published

-- تاريخ المحادثات مع المساعد الذكي
AI_CONVERSATIONS
├── id, patient_id (FK)
├── type: ENUM(symptoms, lab_result)
├── input_text, uploaded_file_path
├── ai_response, recommended_department
└── created_at
```

---

## 3. هيكل المجلدات

```
healpath/
├── docker-compose.yml
├── docker-compose.prod.yml
├── .env.example
├── nginx/
│   └── nginx.conf
├── frontend/                    # Next.js App
│   ├── Dockerfile
│   ├── src/
│   │   ├── app/                # App Router Pages
│   │   │   ├── (public)/       # صفحات الزوار
│   │   │   ├── (patient)/      # بوابة المريض
│   │   │   └── (dashboard)/    # لوحة التحكم
│   │   ├── components/
│   │   │   ├── ui/             # shadcn/ui components
│   │   │   ├── patient/        # مكونات بوابة المريض
│   │   │   ├── dashboard/      # مكونات لوحة التحكم
│   │   │   └── ai-assistant/   # مكونات المساعد الذكي
│   │   ├── lib/
│   │   └── hooks/
│   └── package.json
├── backend/                     # Node.js + Express API
│   ├── Dockerfile
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   ├── appointments.routes.js
│   │   │   ├── pharmacy.routes.js
│   │   │   ├── ai.routes.js
│   │   │   ├── jobs.routes.js
│   │   │   └── articles.routes.js
│   │   ├── middleware/
│   │   │   ├── auth.middleware.js
│   │   │   └── rbac.middleware.js
│   │   ├── controllers/
│   │   ├── services/
│   │   │   └── openai.service.js
│   │   └── prisma/
│   │       └── schema.prisma
│   └── package.json
└── uploads/                     # Docker Volume Mount Point
    ├── doctors/
    ├── medicines/
    ├── lab-results/
    └── cvs/
```

---

## 4. خطة التنفيذ — 7 مراحل

---

### المرحلة صفر — الإعداد والبنية التحتية
**المدة:** أسبوع واحد

#### المهام:
- [ ] تثبيت Docker + Docker Compose على بيئة التطوير
- [ ] إنشاء `docker-compose.yml` (postgres + api + nextjs + nginx)
- [ ] إعداد قاعدة البيانات PostgreSQL في Docker
- [ ] إعداد Prisma Schema الكامل + Migrations
- [ ] إعداد هيكل المجلدات للـ Frontend والـ Backend
- [ ] إعداد متغيرات البيئة (`.env`)
- [ ] إعداد Git repository وهيكل الفروع
- [ ] اختبار تشغيل الحاويات والتواصل بينها

#### ملف `docker-compose.yml` الأساسي:
```yaml
version: '3.8'
services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: healpath_db
      POSTGRES_USER: healpath_user
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

  api:
    build: ./backend
    environment:
      DATABASE_URL: postgresql://healpath_user:${DB_PASSWORD}@postgres:5432/healpath_db
      JWT_SECRET: ${JWT_SECRET}
      OPENAI_API_KEY: ${OPENAI_API_KEY}
    volumes:
      - uploads:/app/uploads
    depends_on:
      - postgres
    restart: unless-stopped

  frontend:
    build: ./frontend
    environment:
      NEXT_PUBLIC_API_URL: /api
    depends_on:
      - api
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - uploads:/app/uploads:ro
    depends_on:
      - frontend
      - api
    restart: unless-stopped

volumes:
  postgres_data:
  uploads:
```

**معيار الاكتمال:** جميع الحاويات تعمل وتتواصل مع بعضها.

---

### المرحلة الأولى — المصادقة والأدوار
**المدة:** أسبوعان

#### الهدف: نظام تسجيل الدخول لجميع المستخدمين

**الباك-إند:**
- [ ] `POST /api/auth/register` — تسجيل مريض جديد
- [ ] `POST /api/auth/login` — دخول المريض
- [ ] `POST /api/staff/login` — دخول موظفي المستشفى (4 أدوار)
- [ ] JWT middleware مع RBAC (Role-Based Access Control)
- [ ] نظام "نسيت كلمة المرور" عبر البريد
- [ ] تشفير bcrypt لجميع كلمات المرور

**الفرونت-إند:**
- [ ] صفحة Landing Page (هيكل كامل + هوية بصرية)
- [ ] شاشة تسجيل دخول المريض
- [ ] شاشة إنشاء حساب للمريض
- [ ] شاشة تسجيل دخول الموظفين (مسار مختلف)
- [ ] Protected Routes حسب الدور
- [ ] توجيه تلقائي بعد الدخول حسب الدور

**معيار الاكتمال:** كل مستخدم يدخل التطبيق ويُوجَّه للواجهة المناسبة لدوره.

---

### المرحلة الثانية — الأقسام والأطباء والحجوزات
**المدة:** 3 أسابيع

#### الهدف: الوظيفة الجوهرية للتطبيق

**الباك-إند:**
- [ ] CRUD الأقسام (للمدير العام)
- [ ] CRUD الأطباء + رفع الصورة → Volume
- [ ] إدارة جداول دوام الأطباء
- [ ] `GET /api/departments/:id/doctors` — أطباء القسم
- [ ] `GET /api/doctors/:id` — بروفايل الطبيب
- [ ] `GET /api/doctors/:id/availability` — الأوقات المتاحة
- [ ] `POST /api/appointments` — إنشاء حجز
- [ ] التحقق من تعارض المواعيد
- [ ] `GET /api/appointments` — حجوزات المريض
- [ ] `PATCH /api/appointments/:id` — تأكيد / إلغاء
- [ ] إشعار بريد عند الحجز (Nodemailer)

**الفرونت-إند — بوابة المريض:**
- [ ] صفحة الأقسام الطبية (بطاقات)
- [ ] صفحة أطباء القسم (بطاقات)
- [ ] صفحة بروفايل الطبيب الكاملة
- [ ] Stepper الحجز (7 خطوات)
- [ ] التقويم التفاعلي (أيام متاحة / محجوزة)
- [ ] شاشة تأكيد الحجز
- [ ] صفحة "مواعيدي"

**الفرونت-إند — المدير العام:**
- [ ] صفحة إدارة الأقسام
- [ ] صفحة إدارة الأطباء + رفع الصور
- [ ] صفحة إدارة الحجوزات (جدول + فلاتر)

**الفرونت-إند — الطبيب:**
- [ ] صفحة "حجوزاتي" (اليوم / الأسبوع / الشهر)
- [ ] تفاصيل كل حجز

**معيار الاكتمال:** المريض يحجز موعداً ويتلقى تأكيداً. الطبيب يرى حجوزاته.

---

### المرحلة الثالثة — الصيدلية الإلكترونية
**المدة:** أسبوعان

#### الهدف: متجر الأدوية الكامل

**الباك-إند:**
- [ ] CRUD الأدوية + رفع الصورة → Volume (لمدير الصيدلية)
- [ ] `GET /api/medicines` — بحث وفلترة
- [ ] `POST /api/orders` — إنشاء طلب
- [ ] تحديث المخزون تلقائياً
- [ ] `GET /api/orders` — طلبات المريض
- [ ] `PATCH /api/orders/:id/status` — تحديث حالة الطلب

**الفرونت-إند — بوابة المريض:**
- [ ] صفحة الصيدلية (عرض + بحث + فلترة)
- [ ] صفحة تفاصيل الدواء
- [ ] سلة المشتريات (Cart)
- [ ] شاشة تأكيد الطلب
- [ ] صفحة "طلباتي"

**الفرونت-إند — مدير الصيدلية:**
- [ ] إدارة الأدوية (إضافة / تعديل / حذف + صورة)
- [ ] إدارة المخزون + تنبيه النقص
- [ ] إدارة الطلبات الواردة
- [ ] تقارير المبيعات

**معيار الاكتمال:** المريض يطلب دواءً. مدير الصيدلية يديره.

---

### المرحلة الرابعة — المساعد الطبي الذكي
**المدة:** أسبوعان

#### الهدف: الميزة الفريدة في التطبيق

**الباك-إند:**
- [ ] `POST /api/ai/symptoms` — تحليل الأعراض النصية
  ```javascript
  // System Prompt
  const systemPrompt = `
  أنت مساعد طبي ذكي لمستشفى HealPath.
  مهمتك: تحليل أعراض المريض وتوجيهه للقسم المناسب.
  الأقسام: العظمية، الصدرية، الكلى، القلبية، العصبية.
  أجب بـ JSON: { department, reason, urgency, disclaimer }
  `;
  ```
- [ ] `POST /api/ai/lab-result` — تحليل صور التحاليل (GPT-4 Vision)
- [ ] حفظ سجل المحادثات في قاعدة البيانات
- [ ] Rate Limiting لضبط استهلاك OpenAI API
- [ ] رفع صور التحاليل → Volume محلي

**الفرونت-إند:**
- [ ] Floating Action Button (ثابت في جميع الصفحات)
- [ ] Side Drawer منبثق للمساعد
- [ ] واجهة محادثة نصية
- [ ] رفع صورة التحليل (Drag & Drop)
- [ ] عرض النتيجة: القسم + السبب + التحذير
- [ ] زر "احجز موعداً الآن" ينقل لمسار الحجز
- [ ] سجل المحادثات السابقة

**معيار الاكتمال:** المريض يصف أعراضه أو يرفع تحليله ويحصل على توصية + حجز مباشر.

---

### المرحلة الخامسة — التوظيف والمحتوى التثقيفي
**المدة:** أسبوع واحد

**التوظيف — الباك-إند:**
- [ ] CRUD الشواغر (لمسؤول التوظيف)
- [ ] `POST /api/jobs/:id/apply` — التقديم + رفع CV → Volume
- [ ] إدارة الطلبات الواردة

**التوظيف — الفرونت-إند:**
- [ ] صفحة الشواغر (للجميع)
- [ ] نموذج التقديم + رفع PDF
- [ ] لوحة مسؤول التوظيف

**المقالات — الباك-إند:**
- [ ] CRUD المقالات + رفع الصور → Volume (للمدير العام)
- [ ] `GET /api/articles` — عرض للجميع

**المقالات — الفرونت-إند:**
- [ ] صفحة المقالات (للجميع)
- [ ] صفحة المقال الكامل
- [ ] إدارة المقالات (المدير العام)

**معيار الاكتمال:** الزوار يتصفحون ويتقدمون. المقالات تظهر للجميع.

---

### المرحلة السادسة — الإحصائيات والتقارير
**المدة:** أسبوع واحد

**الباك-إند:**
- [ ] `GET /api/stats/overview` — أرقام لوحة التحكم
- [ ] `GET /api/stats/appointments` — إحصائيات الحجوزات
- [ ] `GET /api/stats/revenue` — إحصائيات الإيرادات

**الفرونت-إند (المدير العام):**
- [ ] بطاقات الأرقام الرئيسية (حجوزات اليوم / المرضى / المبيعات)
- [ ] رسم بياني للحجوزات (Recharts)
- [ ] رسم بياني للإيرادات
- [ ] آخر الحجوزات (جدول)
- [ ] آخر الطلبات الواردة

**معيار الاكتمال:** المدير يرى لوحة إحصائيات حية ومفيدة.

---

### المرحلة السابعة — الجودة والنشر بـ Docker
**المدة:** أسبوع ونصف

#### الجودة والأمان:
- [ ] مراجعة شاملة لجميع Endpoints (أمان + صلاحيات)
- [ ] HTTPS إجباري (Nginx + SSL)
- [ ] Rate Limiting على جميع الـ APIs
- [ ] Input Validation (Zod أو Joi)
- [ ] تشفير بيانات حساسة في قاعدة البيانات
- [ ] اختبار جميع مسارات المستخدم يدوياً

#### الأداء:
- [ ] تحسين سرعة تحميل التطبيق
- [ ] ضغط الصور تلقائياً عند الرفع
- [ ] Lazy Loading للصفحات
- [ ] تجربة الهاتف المحمول (Responsive Design)

#### بناء حاوية الإنتاج:
- [ ] `Dockerfile` محسّن لكل خدمة (Multi-stage builds)
- [ ] `docker-compose.prod.yml` للإنتاج
- [ ] إعداد النسخ الاحتياطية التلقائية لـ Volume
- [ ] إعداد Nginx مع SSL
- [ ] اختبار Docker build الكامل

#### النشر:
- [ ] رفع الصور إلى أي سيرفر
- [ ] تشغيل `docker-compose up -d`
- [ ] إعداد النطاق (Domain) وشهادة SSL
- [ ] نظام مراقبة الأخطاء

**معيار الاكتمال:** أمر واحد `docker-compose up` يُشغّل التطبيق كاملاً.

---

## 5. الجدول الزمني الإجمالي

```
┌──────────────────────────────────────────────────────────────┐
│                خطة تنفيذ HealPath — الجدول الزمني            │
├─────────────────────────┬──────────────┬────────────────────┤
│         المرحلة         │    المدة      │    الأسابيع        │
├─────────────────────────┼──────────────┼────────────────────┤
│ 0 — الإعداد + Docker    │   أسبوع 1   │    الأسبوع 1      │
│ 1 — المصادقة + الأدوار  │   أسبوعان   │    2 - 3          │
│ 2 — الأقسام + الحجوزات  │  3 أسابيع  │    4 - 6          │
│ 3 — الصيدلية            │   أسبوعان   │    7 - 8          │
│ 4 — المساعد الذكي       │   أسبوعان   │    9 - 10         │
│ 5 — التوظيف + المقالات  │   أسبوع 1   │    الأسبوع 11     │
│ 6 — الإحصائيات         │   أسبوع 1   │    الأسبوع 12     │
│ 7 — الجودة + Docker     │ أسبوع ونصف  │    13 - 14        │
├─────────────────────────┼──────────────┼────────────────────┤
│       المجموع الكلي     │ ~14 أسبوعاً │    ~3.5 شهور       │
└─────────────────────────┴──────────────┴────────────────────┘
```

---

## 6. متغيرات البيئة المطلوبة

```env
# قاعدة البيانات
DATABASE_URL=postgresql://healpath_user:PASSWORD@postgres:5432/healpath_db
DB_PASSWORD=your_secure_password

# المصادقة
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=7d

# OpenAI
OPENAI_API_KEY=sk-...

# البريد الإلكتروني
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=hospital@email.com
SMTP_PASS=email_password

# تخزين الملفات (محلي في Docker)
UPLOADS_PATH=/app/uploads
MAX_FILE_SIZE=10mb

# البيئة
NODE_ENV=production
PORT=3001
```

---

## 7. أوامر التشغيل

```bash
# بيئة التطوير
docker-compose up -d

# إنشاء قاعدة البيانات والجداول
docker-compose exec api npx prisma migrate dev

# بيئة الإنتاج
docker-compose -f docker-compose.prod.yml up -d

# نسخة احتياطية لقاعدة البيانات
docker-compose exec postgres pg_dump -U healpath_user healpath_db > backup.sql

# تحديث التطبيق
docker-compose pull && docker-compose up -d --build
```

---

## 8. مزايا قرار Docker

| الميزة | التفصيل |
|---|---|
| **الاستقلالية الكاملة** | لا اعتماد على AWS أو أي خدمة خارجية |
| **قابلية النقل** | يُنشر على أي سيرفر في ثوانٍ |
| **البيانات آمنة** | كل البيانات في Volumes محلية مشفّرة |
| **التحديث السهل** | أمر واحد يحدّث التطبيق كاملاً |
| **بيئة موحّدة** | نفس البيئة في التطوير والإنتاج |
| **مناسب للسوق السوري** | يعمل على سيرفر محلي دون قيود |

---

*آخر تحديث: مايو 2026*
*إعداد: HealPath Plan Session — إبراهيم*
