#!/bin/bash

if [ -e /vagrant ]; then
  yarn lint-staged
else
  cd ../ && cd chimera-vm-vagrant && vagrant ssh chimera.ap -c 'cd /var/www/rails_app/chimera && yarn lint-staged'
fi
