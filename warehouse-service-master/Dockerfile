FROM amazoncorretto:11

VOLUME /tmp

EXPOSE 8003

ADD ./target/warehouse-service-0.0.1-SNAPSHOT.jar warehouse-service-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "warehouse-service-0.0.1-SNAPSHOT.jar"]