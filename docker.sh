#!/bin/bash
OPT=$1

function build() {
  docker build -t sycue/nid .
}

function run() {
  docker run -d --name nid -p 3001:3001 sycue/nid
}

function restart() {
  docker pull sycue/nid
  docker stop nid
  docker rm nid
  run
}

# opts
case $OPT in
  build)
    build
    ;;

  run)
    run
    ;;

  restart)
    restart
    ;;

  *)
    echo -n "docker.sh run|restart"
    echo
    ;;
esac
