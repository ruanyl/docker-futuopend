```bash
docker run futu -v /Users/ruanyl/project/FutuOpenD/ft_hist_data:/ft_hist_data \
-p 11111:11111 \
-p 22222:22222 \
-e FUTU_OPEND_LOGIN_ACCOUNT=100000 \
-e FUTU_OPEND_LOGIN_PWD=123456 \
-e FUTU_HIST_DATA_MARKET=cn \
-e FUTU_HIST_DATA_NNID=100000
```
