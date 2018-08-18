FROM ubuntu:16.04

WORKDIR /futu

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update
RUN apt-get -qq update
RUN apt-get install -y nodejs npm

# fucking debian installs `node` as `nodejs`
RUN update-alternatives --install /usr/bin/node node /usr/bin/nodejs 10

COPY . .

RUN npm install

EXPOSE 11111 22222
CMD [ "./run.sh" ]
