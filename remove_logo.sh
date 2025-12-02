#!/bin/bash

# 定义要删除的logo模式（考虑不同的变体）
pattern1='<div id="logo" class="logo">[[:space:]]*<a href="/index.html">[[:space:]]*<div class="logo-i">[[:space:]]*<img[^>]*>[[:space:]]*</div>[[:space:]]*</a>[[:space:]]*</div>'
pattern2='<a href="index.html">[[:space:]]*<div id="logo" class="logo">[[:space:]]*<div class="logo-i">[[:space:]]*<img[^>]*>[[:space:]]*</div>[[:space:]]*</div>[[:space:]]*</a>'
pattern3='<a href="/index.html">[[:space:]]*<div id="logo" class="logo">[[:space:]]*<div class="logo-i">[[:space:]]*<img[^>]*>[[:space:]]*</div>[[:space:]]*</div>[[:space:]]*</a>'

# 处理根目录下的HTML文件
echo "正在处理根目录下的HTML文件..."
for file in *.html; do
  if [ -f "$file" ]; then
    echo "处理 $file"
    # 使用perl进行多行正则替换
    perl -0777 -i -pe "s/$pattern1//gs; s/$pattern2//gs; s/$pattern3//gs" "$file"
  fi
done

# 处理article目录下的HTML文件
echo "正在处理article目录下的HTML文件..."
for file in article/*.html; do
  if [ -f "$file" ]; then
    echo "处理 $file"
    perl -0777 -i -pe "s/$pattern1//gs; s/$pattern2//gs; s/$pattern3//gs" "$file"
  fi
done

# 处理md目录下的HTML文件
echo "正在处理md目录下的HTML文件..."
for file in md/*.html; do
  if [ -f "$file" ]; then
    echo "处理 $file"
    perl -0777 -i -pe "s/$pattern1//gs; s/$pattern2//gs; s/$pattern3//gs" "$file"
  fi
done

echo "所有文件处理完成！"
