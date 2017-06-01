#!/usr/bin/env bash
dest="data.js";
> $dest;
for path in ./data/*; do
    filename=$(basename "$path")
    extension="${filename##*.}"
    filenameWihoutExtension="${filename%.*}"
    echo "export { default as "${filenameWihoutExtension} " } from "\"${path}\"\ >> $dest;
done

#path="./data/WebDictService_GetItem_Material_65786.json"
#filename=$(basename "$path")
#extension="${filename##*.}"
#filenameWihoutExtension="${filename%.*}"
#echo $filename
#echo $extension
#echo $filenameWihoutExtension
