#!/bin/env bash

mv -v -f httpd.conf /data/data/com.termux/files/usr/etc/apache2
mv -v -f index.php /data/data/com.termux/files/usr/share/apache2/default-site/htdocs
mv -v -f game /data/data/com.termux/files/usr/share/apache2/default-site/htdocs
mv -v -f scripts /data/data/com.termux/files/usr/share/apache2/default-site/htdocs
mv -v -f css /data/data/com.termux/files/usr/share/apache2/default-site/htdocs
