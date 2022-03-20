# RealWorld API

Utgå från det här projektet när ni gör er gruppuppgift.

Projektet innehåller en server som levererar frontenden för er uppgift, samt ett skal för en Express-backend där ni får fylla på med era egna routes.

## Postman



För att köra alla Postman-tester kan ni använda:

```sh
npx newman run api/RealWorld.postman_collection.json \
  --delay-request 500 \
  --global-var "APIURL=$APIURL" \
  --global-var "USERNAME=$USERNAME" \
  --global-var "EMAIL=$EMAIL" \
  --global-var "PASSWORD=$PASSWORD" \
  "$@"
```

`$APIURL` ska vara URL:en till ert API, e.g. `http://localhost:3000`
