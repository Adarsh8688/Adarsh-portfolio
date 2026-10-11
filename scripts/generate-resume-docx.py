import os
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_margins(cell, top=80, bottom=80, left=100, right=100):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def set_cell_shading(cell, color_hex):
    shading_elm = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{color_hex}"/>')
    cell._tc.get_or_add_tcPr().append(shading_elm)

def add_heading_with_bottom_border(doc, text):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(9)
    p.paragraph_format.space_after = Pt(4)
    p.paragraph_format.keep_with_next = True
    
    # Bottom border in XML
    pPr = p._p.get_or_add_pPr()
    pBdr = parse_xml(f'<w:pBdr {nsdecls("w")}><w:bottom w:val="single" w:sz="8" w:space="2" w:color="0F172A"/></w:pBdr>')
    pPr.append(pBdr)
    
    run = p.add_run(text)
    run.font.name = 'Calibri'
    run.font.size = Pt(11)
    run.font.bold = True
    run.font.color.rgb = RGBColor(15, 23, 42) # Deep navy
    return p

def create_resume():
    doc = Document()
    
    # A4 dimensions & 0.55 inch margins
    sections = doc.sections
    for section in sections:
        section.page_width = Inches(8.27)  # A4 width
        section.page_height = Inches(11.69) # A4 height
        section.top_margin = Inches(0.55)
        section.bottom_margin = Inches(0.55)
        section.left_margin = Inches(0.6)
        section.right_margin = Inches(0.6)
    
    # ---------------- HEADER ----------------
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(0)
    title_p.paragraph_format.space_after = Pt(1)
    name_run = title_p.add_run("MAMIDALA ADARSH")
    name_run.font.name = 'Calibri'
    name_run.font.size = Pt(20)
    name_run.font.bold = True
    name_run.font.color.rgb = RGBColor(15, 23, 42)
    
    sub_p = doc.add_paragraph()
    sub_p.paragraph_format.space_before = Pt(0)
    sub_p.paragraph_format.space_after = Pt(3)
    sub_run = sub_p.add_run("M.Sc. Data Science Graduate | Data Science • Data Analytics • Machine Learning")
    sub_run.font.name = 'Calibri'
    sub_run.font.size = Pt(10.5)
    sub_run.font.bold = True
    sub_run.font.color.rgb = RGBColor(37, 99, 235) # Royal Blue
    
    # Contact Info line 1
    c1_p = doc.add_paragraph()
    c1_p.paragraph_format.space_before = Pt(0)
    c1_p.paragraph_format.space_after = Pt(1)
    c1_run = c1_p.add_run("📍 Germany  |  ✉️ mamidalaadarsh99@gmail.com  |  🌐 https://adarsh-portfolio-eight-gamma.vercel.app/")
    c1_run.font.name = 'Calibri'
    c1_run.font.size = Pt(9.5)
    c1_run.font.color.rgb = RGBColor(71, 85, 105)
    
    # Contact Info line 2
    c2_p = doc.add_paragraph()
    c2_p.paragraph_format.space_before = Pt(0)
    c2_p.paragraph_format.space_after = Pt(2)
    c2_run = c2_p.add_run("💻 GitHub: github.com/Adarsh8688  |  💼 LinkedIn: linkedin.com/in/mamidala-adarsh-1519a62a2")
    c2_run.font.name = 'Calibri'
    c2_run.font.size = Pt(9.5)
    c2_run.font.color.rgb = RGBColor(71, 85, 105)
    
    # Work status highlight
    status_p = doc.add_paragraph()
    status_p.paragraph_format.space_before = Pt(0)
    status_p.paragraph_format.space_after = Pt(6)
    status_run = status_p.add_run("✅ Work Authorization: Eligible for Full-Time Employment in Germany (German University Graduate)")
    status_run.font.name = 'Calibri'
    status_run.font.size = Pt(9)
    status_run.font.bold = True
    status_run.font.color.rgb = RGBColor(5, 150, 105) # Emerald
    
    # ---------------- PROFESSIONAL PROFILE ----------------
    add_heading_with_bottom_border(doc, "PROFESSIONAL PROFILE (KURZPROFIL)")
    
    prof_p = doc.add_paragraph()
    prof_p.paragraph_format.space_before = Pt(2)
    prof_p.paragraph_format.space_after = Pt(3)
    prof_p.paragraph_format.line_spacing = 1.15
    
    p_run = prof_p.add_run(
        "Analytical and results-driven M.Sc. Data Science graduate from the University of Europe for Applied Sciences (Germany, August 2026) "
        "with strong expertise in predictive machine learning, SQL analytics, data pipelines, and business intelligence. Demonstrated solid research "
        "acumen in Master's thesis by achieving an 18.4% error reduction (MAE 3.8 → 3.1) in traffic speed forecasting using Spatio-Temporal Graph "
        "Neural Networks (ST-GNN) on METR-LA sensor networks. Experienced in developing end-to-end data workflows from relational databases "
        "(PostgreSQL, SQL) and streaming pipelines (Kafka, PySpark) to interactive business dashboards (Power BI, Streamlit). Holds verified Coursera "
        "credentials in SQL, Python, and Data Science, paired with official GDPR data privacy compliance certification."
    )
    p_run.font.name = 'Calibri'
    p_run.font.size = Pt(9.5)
    p_run.font.color.rgb = RGBColor(30, 41, 59)
    
    target_p = doc.add_paragraph()
    target_p.paragraph_format.space_before = Pt(1)
    target_p.paragraph_format.space_after = Pt(4)
    t_label = target_p.add_run("Target Roles: ")
    t_label.font.name = 'Calibri'
    t_label.font.size = Pt(9)
    t_label.font.bold = True
    t_label.font.color.rgb = RGBColor(15, 23, 42)
    
    t_val = target_p.add_run("Junior Data Analyst  •  Junior BI Analyst  •  Junior Data Scientist  •  Junior Power BI Analyst  •  Machine Learning Intern  •  Working Student — Data Analytics")
    t_val.font.name = 'Calibri'
    t_val.font.size = Pt(9)
    t_val.font.color.rgb = RGBColor(37, 99, 235)
    
    # ---------------- TECHNICAL COMPETENCIES ----------------
    add_heading_with_bottom_border(doc, "CORE TECHNICAL COMPETENCIES (IT- & FACHKENNTNISSE)")
    
    table = doc.add_table(rows=5, cols=2)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    
    col_widths = [Inches(1.8), Inches(5.27)]
    for row in table.rows:
        for idx, width in enumerate(col_widths):
            row.cells[idx].width = width
            set_cell_margins(row.cells[idx], top=40, bottom=40, left=40, right=40)
            
    skills_data = [
        ("Programming & Scripting", "Python (Advanced: Pandas, NumPy, Scikit-learn, PyTorch, SciPy), SQL (Advanced: PostgreSQL, MySQL, Complex CTEs, Multi-table Joins, Window Functions, Query Optimization)"),
        ("BI & Visualization", "Power BI (DAX, Star Schema Modeling, KPI Dashboards), Streamlit (Cloud Web Apps), Tableau, Matplotlib, Seaborn, MS Excel (Pivot Tables, Advanced Modeling)"),
        ("Data Engineering & Cloud", "PySpark, Apache Kafka, Debezium (CDC), REST APIs, Git & GitHub, Docker, Linux/Bash"),
        ("Machine Learning & Modeling", "Graph Neural Networks (ST-GNN), Time-Series Forecasting, Supervised ML (Regression, Classification, XGBoost, Random Forests), Model Evaluation (MAE, RMSE, ROC-AUC)"),
        ("Data Compliance & Methods", "GDPR Fundamentals Certified (Privacy by Design, Data Anonymization), Exploratory Data Analysis (EDA), Hypothesis Testing, Statistical Inference")
    ]
    
    for row_idx, (cat, desc) in enumerate(skills_data):
        row = table.rows[row_idx]
        
        # Left cell
        c0 = row.cells[0]
        p0 = c0.paragraphs[0]
        p0.paragraph_format.space_before = Pt(1)
        p0.paragraph_format.space_after = Pt(1)
        r0 = p0.add_run(cat)
        r0.font.name = 'Calibri'
        r0.font.size = Pt(9)
        r0.font.bold = True
        r0.font.color.rgb = RGBColor(15, 23, 42)
        
        # Right cell
        c1 = row.cells[1]
        p1 = c1.paragraphs[0]
        p1.paragraph_format.space_before = Pt(1)
        p1.paragraph_format.space_after = Pt(1)
        r1 = p1.add_run(desc)
        r1.font.name = 'Calibri'
        r1.font.size = Pt(9)
        r1.font.color.rgb = RGBColor(51, 65, 85)
        
        # Subtle alternating background
        if row_idx % 2 == 1:
            set_cell_shading(c0, "F8FAFC")
            set_cell_shading(c1, "F8FAFC")
            
    # ---------------- EDUCATION ----------------
    add_heading_with_bottom_border(doc, "EDUCATION (AUSBILDUNG)")
    
    # Master Degree
    m_p = doc.add_paragraph()
    m_p.paragraph_format.space_before = Pt(3)
    m_p.paragraph_format.space_after = Pt(1)
    m_p.paragraph_format.keep_with_next = True
    
    r_deg = m_p.add_run("Master of Science (M.Sc.) in Data Science")
    r_deg.font.name = 'Calibri'
    r_deg.font.size = Pt(10)
    r_deg.font.bold = True
    r_deg.font.color.rgb = RGBColor(15, 23, 42)
    
    r_date = m_p.add_run("\tCompleted: August 2026")
    r_date.font.name = 'Calibri'
    r_date.font.size = Pt(9)
    r_date.font.bold = True
    r_date.font.color.rgb = RGBColor(100, 116, 139)
    
    # Institution
    inst_p = doc.add_paragraph()
    inst_p.paragraph_format.space_before = Pt(0)
    inst_p.paragraph_format.space_after = Pt(2)
    r_inst = inst_p.add_run("University of Europe for Applied Sciences — Germany")
    r_inst.font.name = 'Calibri'
    r_inst.font.size = Pt(9.5)
    r_inst.font.color.rgb = RGBColor(37, 99, 235)
    
    # Thesis metric badge
    th_badge = doc.add_paragraph()
    th_badge.paragraph_format.space_before = Pt(0)
    th_badge.paragraph_format.space_after = Pt(2)
    r_thb = th_badge.add_run("⭐ Key Thesis Benchmark: 18.4% Error Reduction (MAE 3.8 → 3.1) on METR-LA Sensor Network")
    r_thb.font.name = 'Calibri'
    r_thb.font.size = Pt(9)
    r_thb.font.bold = True
    r_thb.font.color.rgb = RGBColor(5, 150, 105)
    
    # Thesis details bullet
    b1 = doc.add_paragraph(style='List Bullet')
    b1.paragraph_format.space_before = Pt(0)
    b1.paragraph_format.space_after = Pt(1)
    rb1 = b1.add_run("Master's Thesis: Short-Term Traffic Speed Forecasting using Spatio-Temporal Graph Neural Networks (ST-GNN). Engineered dynamic graph convolution architectures capturing topological road connectivity and temporal speed sequences over 207 highway sensor nodes, significantly outperforming standard baseline models.")
    rb1.font.name = 'Calibri'
    rb1.font.size = Pt(9)
    rb1.font.color.rgb = RGBColor(51, 65, 85)
    
    b2 = doc.add_paragraph(style='List Bullet')
    b2.paragraph_format.space_before = Pt(0)
    b2.paragraph_format.space_after = Pt(4)
    rb2 = b2.add_run("Key Coursework: Deep Learning & Neural Architectures, Cloud Computing & Big Data (PySpark, Kafka), Advanced Statistical Modeling, Relational Database Design, AI Ethics & Privacy.")
    rb2.font.name = 'Calibri'
    rb2.font.size = Pt(9)
    rb2.font.color.rgb = RGBColor(51, 65, 85)
    
    # Bachelor Degree
    b_p = doc.add_paragraph()
    b_p.paragraph_format.space_before = Pt(3)
    b_p.paragraph_format.space_after = Pt(1)
    b_deg = b_p.add_run("Bachelor of Technology / Bachelor of Science [Your Degree Name]")
    b_deg.font.name = 'Calibri'
    b_deg.font.size = Pt(10)
    b_deg.font.bold = True
    b_deg.font.color.rgb = RGBColor(15, 23, 42)
    
    b_date = b_p.add_run("\t[Graduation Year, e.g., 2020 – 2024]")
    b_date.font.name = 'Calibri'
    b_date.font.size = Pt(9)
    b_date.font.color.rgb = RGBColor(100, 116, 139)
    
    b_inst = doc.add_paragraph()
    b_inst.paragraph_format.space_before = Pt(0)
    b_inst.paragraph_format.space_after = Pt(2)
    rb_inst = b_inst.add_run("[Your University Name] — [City, Country]")
    rb_inst.font.name = 'Calibri'
    rb_inst.font.size = Pt(9.5)
    rb_inst.font.color.rgb = RGBColor(37, 99, 235)
    
    bb1 = doc.add_paragraph(style='List Bullet')
    bb1.paragraph_format.space_before = Pt(0)
    bb1.paragraph_format.space_after = Pt(4)
    rbb1 = bb1.add_run("Foundational study in Computer Science, Database Management Systems, Data Structures, Algorithms, Mathematics, and Statistics.")
    rbb1.font.name = 'Calibri'
    rbb1.font.size = Pt(9)
    rbb1.font.color.rgb = RGBColor(51, 65, 85)
    
    # ---------------- PROJECTS & PRACTICAL EXPERIENCE ----------------
    add_heading_with_bottom_border(doc, "FEATURED PROJECTS & PRACTICAL EXPERIENCE (PROJEKTE)")
    
    projects = [
        (
            "Short-Term Traffic Speed Forecasting (ST-GNN)",
            "PyTorch • Graph Neural Networks • NetworkX • Time-Series Modeling • Benchmark Dataset",
            "https://github.com/Adarsh8688/Short-Term-Traffic-Speed-Forecasting",
            [
                "Engineered spatio-temporal deep learning graph convolutions on benchmark METR-LA road sensor datasets (207 sensor nodes).",
                "Modeled dynamic adjacency matrices to represent physical road dependencies; achieved 18.4% MAE improvement over standard baselines (3.8 → 3.1).",
                "Conducted rigorous residual validations, hyperparameter tuning, and ablation studies in reproducible Jupyter environments."
            ]
        ),
        (
            "Logistics Operations Intelligence Platform",
            "Python • PostgreSQL • Streamlit Cloud • Scikit-Learn • Operational Risk Scoring",
            "https://github.com/Adarsh8688/logistics-operations-intelligence (Live: Streamlit Cloud)",
            [
                "Built an end-to-end logistics analytics system with PostgreSQL data modeling and an interactive web dashboard deployed on Streamlit Cloud.",
                "Trained predictive machine learning classification models forecasting delivery delay risks before dispatch to assist logistics planners.",
                "Engineered a custom multi-factor risk score prioritizing high-exposure shipments and warehouse damage claim bottlenecks."
            ]
        ),
        (
            "DataForge: Event-Driven Streaming Data Platform",
            "Apache Kafka • PySpark • Debezium CDC • PostgreSQL • Schema Contracts • Power BI Ready",
            "https://github.com/Adarsh8688/dataforge-event-driven-data-platform",
            [
                "Architected a near-real-time event streaming pipeline capturing transactional mutations via Debezium Change Data Capture (CDC).",
                "Enforced schema registries and strict data contracts to eliminate upstream schema drift across distributed e-commerce microservices.",
                "Transformed streaming batches via PySpark for real-time deduplication and loaded curated tables ready for Power BI dashboards."
            ]
        ),
        (
            "Washington D.C. Bike Demand Analytics",
            "Python • Streamlit • Pandas • Seaborn • Exploratory Data Analysis",
            "https://github.com/Adarsh8688/bike-dashboard",
            [
                "Analyzed 17,000+ hourly bike rental records to uncover seasonal, hourly, and meteorological patterns across Washington D.C.",
                "Engineered correlation heatmaps identifying multi-collinearity between temperature, humidity, and demand fluctuations."
            ]
        ),
        (
            "Enterprise SQL Analytics & Cohort Modeling",
            "PostgreSQL • Complex Joins • Window Functions • CTEs • Cohort Analysis",
            "https://github.com/Adarsh8688/Chinook-Database-Project",
            [
                "Formulated advanced SQL queries utilizing Common Table Expressions (CTEs), multi-table joins, subqueries, and window functions.",
                "Extracted customer lifetime value (CLV), sales trends across international territories, and churn indicators."
            ]
        )
    ]
    
    for title, tech, url, bullets in projects:
        proj_p = doc.add_paragraph()
        proj_p.paragraph_format.space_before = Pt(3)
        proj_p.paragraph_format.space_after = Pt(0)
        proj_p.paragraph_format.keep_with_next = True
        
        rt = proj_p.add_run(title)
        rt.font.name = 'Calibri'
        rt.font.size = Pt(9.5)
        rt.font.bold = True
        rt.font.color.rgb = RGBColor(15, 23, 42)
        
        ru = proj_p.add_run(f" | {url}")
        ru.font.name = 'Calibri'
        ru.font.size = Pt(8.5)
        ru.font.color.rgb = RGBColor(37, 99, 235)
        
        tech_p = doc.add_paragraph()
        tech_p.paragraph_format.space_before = Pt(0)
        tech_p.paragraph_format.space_after = Pt(1)
        tech_p.paragraph_format.keep_with_next = True
        rtech = tech_p.add_run(f"Tech Stack: {tech}")
        rtech.font.name = 'Calibri'
        rtech.font.size = Pt(8.5)
        rtech.font.italic = True
        rtech.font.color.rgb = RGBColor(71, 85, 105)
        
        for bullet in bullets:
            bp = doc.add_paragraph(style='List Bullet')
            bp.paragraph_format.space_before = Pt(0)
            bp.paragraph_format.space_after = Pt(1)
            rb = bp.add_run(bullet)
            rb.font.name = 'Calibri'
            rb.font.size = Pt(9)
            rb.font.color.rgb = RGBColor(51, 65, 85)
            
    # ---------------- CERTIFICATIONS & LANGUAGES ----------------
    add_heading_with_bottom_border(doc, "VERIFIED CERTIFICATIONS & LANGUAGES")
    
    c_table = doc.add_table(rows=1, cols=2)
    c_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    c_table.autofit = False
    
    c_col_widths = [Inches(3.5), Inches(3.57)]
    for row in c_table.rows:
        for idx, width in enumerate(c_col_widths):
            row.cells[idx].width = width
            set_cell_margins(row.cells[idx], top=40, bottom=40, left=40, right=40)
            
    cell_cert = c_table.rows[0].cells[0]
    p_ch = cell_cert.paragraphs[0]
    p_ch.paragraph_format.space_after = Pt(2)
    r_ch = p_ch.add_run("Verified Certifications (Zertifikate):")
    r_ch.font.name = 'Calibri'
    r_ch.font.size = Pt(9)
    r_ch.font.bold = True
    r_ch.font.color.rgb = RGBColor(15, 23, 42)
    
    certs = [
        "SQL for Data Science — Coursera Verified",
        "Python for Data Science — Coursera Verified",
        "Data Science Specialization — Coursera Verified",
        "GDPR Fundamentals — Certified Data Protection"
    ]
    for c in certs:
        cp = cell_cert.add_paragraph(style='List Bullet')
        cp.paragraph_format.space_before = Pt(0)
        cp.paragraph_format.space_after = Pt(1)
        cr = cp.add_run(c)
        cr.font.name = 'Calibri'
        cr.font.size = Pt(8.5)
        cr.font.color.rgb = RGBColor(51, 65, 85)
        
    cell_lang = c_table.rows[0].cells[1]
    p_lh = cell_lang.paragraphs[0]
    p_lh.paragraph_format.space_after = Pt(2)
    r_lh = p_lh.add_run("Languages & Work Authorization:")
    r_lh.font.name = 'Calibri'
    r_lh.font.size = Pt(9)
    r_lh.font.bold = True
    r_lh.font.color.rgb = RGBColor(15, 23, 42)
    
    langs = [
        "English: Fluent / C1-C2 (Language of Master's study)",
        "German: [A2 / B1 — Actively learning / Grundkenntnisse]",
        "Telugu / Hindi: Native / Fluent",
        "Work Status: Direct full-time employment rights in Germany"
    ]
    for l in langs:
        lp = cell_lang.add_paragraph(style='List Bullet')
        lp.paragraph_format.space_before = Pt(0)
        lp.paragraph_format.space_after = Pt(1)
        lr = lp.add_run(l)
        lr.font.name = 'Calibri'
        lr.font.size = Pt(8.5)
        lr.font.color.rgb = RGBColor(51, 65, 85)
        
    # Save files
    out_root = os.path.join(os.getcwd(), "Adarsh_Mamidala_Resume_Germany.docx")
    out_public = os.path.join(os.getcwd(), "public", "Adarsh_Mamidala_Resume_Germany.docx")
    
    doc.save(out_root)
    doc.save(out_public)
    print(f"Successfully generated Word document:\n1. {out_root}\n2. {out_public}")

if __name__ == "__main__":
    create_resume()
