echo 'Updating Config.json'
for file in $JSFOLDER;
    do
        echo $file
        if [ -n "$AuthUrl" ]; then
        sed -i -e "s|\$AuthUrl|$AuthUrl|g" $file
        fi
        if [ -n "$URL" ]; then
        sed -i -e "s|\$URL|$URL|g" $file
        fi
         if [ -n "$MailUrl" ]; then
        sed -i -e "s|\$MailUrl|$MailUrl|g" $file
        fi
done
