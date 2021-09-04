#!/bin/bash

# Create the temporary directory
tempdir="$(mktemp -d)"

# Download sources and calculate checksum
filename=${DOWNLOAD_URL##*/}
curl --silent -4 -L $DOWNLOAD_URL -o "$tempdir/$filename"
checksum=$(sha256sum "$tempdir/$filename" | head -c 64)

# Delete temporary directory
rm -rf $tempdir

# Get extension
if [[ $filename == *.tar.gz ]]; then
extension=tar.gz
else
extension=${filename##*.}
fi

# Rewrite source file
cat <<EOT > conf/app.src
SOURCE_URL=$DOWNLOAD_URL
SOURCE_SUM=$checksum
SOURCE_SUM_PRG=sha256sum
SOURCE_FORMAT=$extension
SOURCE_IN_SUBDIR=true
SOURCE_FILENAME=
EOT
