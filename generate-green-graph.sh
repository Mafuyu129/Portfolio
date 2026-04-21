#!/bin/bash

# สร้างโฟลเดอร์สำหรับโปรเจกต์กราฟเขียว
TARGET_DIR="$HOME/Desktop/github-green-graph"
mkdir -p "$TARGET_DIR"
cd "$TARGET_DIR" || exit

# เริ่มต้น Git
git init

# สร้างไฟล์เปล่าๆ สำหรับใช้ทำ commit
touch contribution.md
git add contribution.md

echo "กำลังสร้าง Commit ย้อนหลัง 365 วัน กรุณารอสักครู่..."

# วนลูปย้อนหลัง 365 วัน (1 ปี) เพื่อสร้าง Commit
# สุ่มทำ 1-4 commit ในบางวัน
for i in {1..365}
do
  # สุ่มตัวเลข 0 ถึง 4 เพื่อเป็นจำนวน commit ในวันนั้นๆ (ถ้าได้ 0 คือไม่รัน)
  num_commits=$((RANDOM % 5))
  
  if [ $num_commits -gt 0 ]; then
    for (( c=1; c<=$num_commits; c++ ))
    do
      # คำนวณวันที่ย้อนหลัง (คำสั่ง date ของ macOS)
      COMMIT_DATE=$(date -v-"$i"d +"%Y-%m-%dT12:00:00")
      
      # เขียนอะไรบางอย่างลงไปในไฟล์เพื่อให้มี log
      echo "Commit on $COMMIT_DATE - $c" > contribution.md
      git add contribution.md
      
      # ทำการ Commit โดยระบุวันที่ย้อนหลัง
      GIT_AUTHOR_DATE="$COMMIT_DATE" GIT_COMMITTER_DATE="$COMMIT_DATE" git commit -m "Update contribution - $COMMIT_DATE" > /dev/null
    done
  fi
done

echo "✅ สร้างโปรเจกต์และ Commit ย้อนหลังเรียบร้อยแล้วที่: $TARGET_DIR"
echo ""
echo "=== ขั้นตอนต่อไป ==="
echo "1. ไปที่เว็บไซต์ GitHub สร้าง Repository ใหม่ (แบบ Public หรือ Private ก็ได้)"
echo "2. เปิด Terminal แล้วเข้าไปที่โฟลเดอร์นั้น:"
echo "   cd ~/Desktop/github-green-graph"
echo "3. รันคำสั่ง 3 บรรทัดนี้เพื่อจำข้อมูลขึ้น GitHub:"
echo "   git branch -M main"
echo "   git remote add origin https://github.com/ชื่อผู้ใช้ของคุณ/ชื่อrepo.git"
echo "   git push -u origin main"
