FROM amazoncorretto:17
RUN apk update && apk upgrade && apk add python3 python3-pip -y
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
