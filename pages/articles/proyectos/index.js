import Layout from "../../../components/layout";
import * as Tabs from "@radix-ui/react-tabs";

export default function Radio() {
  return (
    <Layout>
      <h1 className="text-3xl text-center capitalize text-white">Proyectos</h1>
      <div className="sipnosis text-white my-4">
        A lo largo de la carrera pasamos por diferentes etapas en radio y para
        ellos debemos aprender los requisitos y las características que estas
        conllevan, para ellos tenemos una serie de trabajos donde se podrán
        informar.
      </div>
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Linea de Tiempo
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Aspectos Legales de Radio
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab3">
            Como ser buen locutor ?
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <div className="flex justify-center content-center items-center">
            <iframe
              src="/proyectos/linea.pdf"
              frameborder="0"
              height={500}
              width={800}
            ></iframe>
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <div className="flex justify-center content-center items-center">
            <iframe
              src="/proyectos/aspectos.pdf"
              frameborder="0"
              height={500}
              width={800}
            ></iframe>
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab3">
          <img src="/proyectos/locutor.png" alt="locutor" />
        </Tabs.Content>
      </Tabs.Root>
    </Layout>
  );
}
