#- container app "aCOMER" - Development v.0.1.0
#- by Carlos Lopez | @jclopex | 2021.04.30

#- pull official base image
FROM node:alpine

#- set working directory
WORKDIR "/app"

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#-  install app dependencies
COPY ./package*.json ./
COPY ./package-lock.json ./
RUN npm install && apk update && apk add bash
#--silent
#RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
#CMD ["yarn", "start"]
CMD ["npm", "start"]
#yarn build

#FROM nginx
#EXPOSE 80
#COPY --from=0 /app/build /usr/share/nginx/html