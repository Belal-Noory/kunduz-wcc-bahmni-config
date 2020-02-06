#!/usr/bin/env bash

if [ -f /etc/NIXOS ]; then
  nix run nixos.ansible --command ansible-playbook -i inventory config.yml $@
else
  ansible-playbook -i inventory config.yml $@
fi

