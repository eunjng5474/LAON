FROM amazoncorretto:17
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
RUN yum update -y && yum install python3 python3-pip -y
ENTRYPOINT ["java", "-jar", "/app.jar"]
