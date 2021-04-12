import { NodeTracerProvider } from '@opentelemetry/node';
import { CollectorTraceExporter } from '@opentelemetry/exporter-collector';
import { GraphQLInstrumentation } from '@opentelemetry/instrumentation-graphql';
import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from '@opentelemetry/tracing';

// Prerequisite:
// OTL collector agent + tracing backends must be running
// (use "yarn tel:start" || "yarn tel:startd" to run them locally in a composition)

export class Tracer {
  static start(serviceName) {
    const exporter = new CollectorTraceExporter({
      serviceName,
    });

    const provider = new NodeTracerProvider({
      plugins: {
        dns: { enabled: false, path: '@opentelemetry/plugin-http' },
        http: { enabled: false, path: '@opentelemetry/plugin-http' },
        https: { enabled: false, path: '@opentelemetry/plugin-https' },
        express: { enabled: false, path: '@opentelemetry/plugin-express' },
        mongodb: { enabled: true, path: '@opentelemetry/plugin-mongodb' },
      },
    });

    const graphQLInstrumentation = new GraphQLInstrumentation({
      // allowAttributes: true,
      // depth: 2,
      // mergeItems: true,
    });

    graphQLInstrumentation.setTracerProvider(provider);

    graphQLInstrumentation.enable();

    provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
    provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
    provider.register();
  }
}
