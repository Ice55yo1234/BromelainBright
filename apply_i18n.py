import os
import re
import glob

html_files = glob.glob('c:/antigravity/ข้าวโพดอบกรอบ/*.html')

btn_html = '<button id="lang-toggle" onclick="toggleLang()" class="btn btn-outline" style="padding:4px 8px;font-size:var(--fs-xs);border-color:var(--gray-200);color:var(--forest);background:transparent;" title="Switch Language">🇬🇧 EN</button>'

for file in html_files:
    if file.endswith('index.html'):
        continue # already done manually
    
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add button
    if 'id="lang-toggle"' not in content:
        content = re.sub(r'(<div class="nav-actions">)', r'\1\n        ' + btn_html, content)

    # Add data-i18n to nav links
    content = content.replace('<a href="index.html" class="active">Home</a>', '<a href="index.html" class="active" data-i18n="nav.home">Home</a>')
    content = content.replace('<a href="index.html">Home</a>', '<a href="index.html" data-i18n="nav.home">Home</a>')
    content = content.replace('<a href="products.html">Products</a>', '<a href="products.html" data-i18n="nav.products">Products</a>')
    content = content.replace('<a href="shop.html">Shop</a>', '<a href="shop.html" data-i18n="nav.shop">Shop</a>')
    content = content.replace('<a href="research.html">Research</a>', '<a href="research.html" data-i18n="nav.research">Research</a>')
    content = content.replace('<a href="sustainability.html">Sustainability</a>', '<a href="sustainability.html" data-i18n="nav.sustainability">Sustainability</a>')
    content = content.replace('<a href="company.html">Company</a>', '<a href="company.html" data-i18n="nav.company">Company</a>')
    content = content.replace('<a href="contact.html">Contact</a>', '<a href="contact.html" data-i18n="nav.contact">Contact</a>')

    # Add script tag
    if 'src="js/i18n.js"' not in content:
        content = re.sub(r'(<script src="js/app.js"></script>)', r'<script src="js/i18n.js"></script>\n  \1', content)
        # If app.js is not present (some files might not have it), put it before </body>
        if 'src="js/i18n.js"' not in content:
            content = re.sub(r'(</body>)', r'<script src="js/i18n.js"></script>\n\1', content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Updated {len(html_files) - 1} files.")
