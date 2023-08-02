FROM amazoncorretto:17
VOLUME /tmp
ARG JAR_FILE=./build/libs/blue-1.0.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]
