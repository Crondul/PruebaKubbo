FROM amazoncorretto:11

VOLUME /tmp

EXPOSE 8001

ADD ./target/product-service-0.0.1-SNAPSHOT.jar product-service-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "product-service-0.0.1-SNAPSHOT.jar"]