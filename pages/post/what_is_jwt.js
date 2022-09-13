import Head from "next/head";
import Layout from "../../components/post-layout";

export default function jwt() {
  return (
    <Layout>
      <Head>
        <title>What iw JWT?</title>
        <meta name="description" content="What the fuck are the jwt?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mb-5">What is JWT?</h1>
      <div className="mb-5">
        JWT, or JSON Web Token, is an open standard used to share security
        information between two parties — a client and a server. Each JWT
        contains encoded JSON objects, including a set of claims. JWTs are
        signed using a cryptographic algorithm to ensure that the claims cannot
        be altered after the token is issued.
      </div>
      <h4 className="mb-5">What Are Tokens?</h4>
      <div className="mb-5">
        Now that you understand JSON as a data text format, you may be wondering
        What are tokens? To put it simply, a token is a string of data that
        represents something else, such as an identity. In the case of
        authentication, a non-JWT based token is a string of characters that
        allow the receiver to validate the sender’s identity. The important
        distinction here is lack of meaning within the characters themselves.
      </div>
      <h2 className="mb-5">How JWT Works</h2>
      <div className="mb-5">
        JWTs differ from other web tokens in that they contain a set of claims.
        Claims are used to transmit information between two parties. What these
        claims are depends on the use case at hand. For example, a claim may
        assert who issued the token, how long it is valid for, or what
        permissions the client has been granted.
      </div>
      <div className="mb-5">
        A JWT is a string made up of three parts, separated by dots (.), and
        serialized using base64. In the most common serialization format,
        compact serialization, the JWT looks something like this:
        xxxxx.yyyyy.zzzzz.
      </div>
      <div class="mb-5">Once decoded, you will get two JSON strings:</div>
      <div class="mb-5">
        <ol className="mb-5">
          <li>
            The <b>Header</b> and the <b>Payload</b>
          </li>
          <li>
            The <b>Sinature</b>
          </li>
        </ol>
        The <b>JOSE (JSON Object Signing and Encryption) header</b> contains the
        type of token — JWT in this case — and the signing algorithm.
      </div>
    </Layout>
  );
}
