const API_URL = 'https://URL-DA-API-PRODUCAO/';

const PROD = {
  getTipoMensagens: `${API_URL}SXI/G5Rest?server=${API_URL}&module=rubi&service=com.frimesa&port=hcm_combo_tipo_mensagem`,
  setEnviaMensagem: `${API_URL}SXI/G5Rest?server=${API_URL}&module=rubi&service=com.frimesa&port=hcm_mensagem_gravar`
};

export const environment = {
  production: true,
  api: PROD
};
