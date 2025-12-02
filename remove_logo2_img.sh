#!/bin/bash

# 定义要删除的img标签模式
pattern1='<img src="images/basis/logo2.png" width="130px" alt="logo2" />'
pattern2='<img src="../images/basis/logo2.png" width="130px" alt="logo2" />'

# 处理根目录下的HTML文件
echo "正在处理根目录下的HTML文件..."
for file in *.html; do
  if [ -f "$file" ]; then
    echo "处理 $file"
    # 使用sed进行替换
    sed -i '' "s|$pattern1||g; s|$pattern2||g" "$file"
  fi
done

# 处理article目录下的HTML文件
echo "正在处理article目录下的HTML文件..."
for file in article/*.html; do
  if [ -f "$file" ]; then
    echo "处理 $file"
    sed -i '' "s|$pattern1||g; s|$pattern2||g" "$file"
  fi
done

# 处理md目录下的HTML文件
echo "正在处理md目录下的HTML文件..."
for file in md/*.html; do
  if [ -f "$file" ]; then
    echo "处理 $file"
    sed -i '' "s|$pattern1||g; s|$pattern2||g" "$file"
  fi
done

echo "所有包含logo2.png的img标签已删除！"
