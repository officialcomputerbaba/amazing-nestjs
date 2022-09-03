# Step 1: Generate CA certificate

The below commands will generate a private key and request a simple passphrase for the key. Enter the passphrase and re-enter it again for confirmation.


```sh
openssl genrsa -out CA.key -des3 2048
```

Next, we will generate a root CA certificate using the key generated, that will be valid for `ten years` in our case. The passphrase for the key and certificate info will be requested. Input the desired certificate info or leave it as default.

```sh
openssl req -x509 -sha256 -new -nodes -days 3650 -key CA.key -out CA.pem
```

# Step 2: Generate CSR

Generate a CSR (Certificate Signing Request) using the command below.

```sh
openssl genrsa -out private-encrypted.key -des3 2048
```

Next will be to generate CSR using the key, and then the passphrase created above will be requested. When challenge password requested, you can enter anything.

Use the below command to generate the CSR:

```sh
openssl req -new -key private-encrypted.key -out localhost.csr
```

# Step 3: Signing & Generating a certificate

Now with this CSR, we can request the CA to sign a certificate as below

```sh
openssl x509 -req -in localhost.csr -CA CA.pem -CAkey CA.key -CAcreateserial -days 3650 -sha256 -extfile localhost.ext -out public.crt
```

The server will need the **public.crt** certificate file, and the decrypted key since our **private-encrypted.key** is in encrypted form.

We will need to decrypt the **private-encrypted.key** and store that file too as below.


```sh
openssl rsa -in private-encrypted.key -out private.key
```

👉 Now, we can use `public.crt` & `private.key` to configure the server for HTTPS protocol.

---

## Reference & Credit 

For more details check out this article [How to Get SSL HTTPS for Localhost](https://www.section.io/engineering-education/how-to-get-ssl-https-for-localhost/)
**Author: Lewel Murithi**