# aws-cf-templates

## redeploy code to AWS

```
aws cloudformation deploy --template ./form-mailer.yml --stack-name form-mailer-stack --capabilities CAPABILITY_NAMED_IAM \
  --parameter-overrides Key1=Value1 Key2=Value2 \
```
