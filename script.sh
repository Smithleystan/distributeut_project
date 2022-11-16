git add .

echo "saisir message commit :  \n"
read message

git commit -m "$message"

git push origin main

read