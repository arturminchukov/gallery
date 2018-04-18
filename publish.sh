#!/bin/bash
set -ev
if [ "$TRAVIS_EVENT_TYPE" == "pull_request" ]; then
 # check docker registry variables
 if [[ -n "$DOCKER_USERNAME" && -n "$DOCKER_PASSWORD" ]]; then
 # docker login
 docker login -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD"