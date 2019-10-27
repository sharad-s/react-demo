#Specify a base image
FROM node:alpine as builder

#Set WORKDIR
WORKDIR /app

#COPY package.json for dependenceis
COPY ./package.json .

# Install some dependencies
RUN npm install

#COPY the rest of the files over
COPY . .

# (Optional) Run tests before building
# RUN CI=true npm test

#Run default build command
RUN npm run build
#builds into /app/build


# Nginx Phase
FROM nginx
#Expose Port 80 for AWS Beanstalk
EXPOSE 80
#Copy output from build phase to nginx phase
COPY --from=builder /app/build /usr/share/nginx/html    