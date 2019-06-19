// Based on Angular Translate API https://angular-translate.github.io

var translationsEN = {
  HEADER: 'Action Sequence Editor',
  SUBHEAD: 'Make your Sequence here',
  HEADING: 'A History of Sea Power: Naval Beginnings',
  SUBHEADING: 'Naval history is more than a sequence of battles. It\'s the story of the sea.',
  BUTTON_LANG_IT: 'Português',
  BUTTON_LANG_EN: 'English',
  DROP_CAP: 'C',
  EDITOR: 'Sequence Editor',
  RESIZE: 'Drag, Resize, Snap!',
  TEMA : 'Theme:',
  SCREEN : 'Fullscreen Editor',
  POSITION: 'Reset Position',
  CLEAR: 'Clear Content',
  DISABLE: 'Disable Auto Repeat',
  VIEW: 'Preview',
  OPENVIEW: 'Open Preview',
  CLOSEVIEW: 'Close Preview',
  BGMA: 'Background Music Volume',
  BGMB: 'Sound Effect Volume',
  BGMC: 'Music Effect Volume',
  BGMD: 'Background Sound Volume',
  SKILLS: 'Skills',
  SCOPE: 'Scope',
  SCOPEA: 'None',
  SCOPEB: '1 Enemy',
  SCOPEC: 'All Enemies',
  SCOPED: '1 Random Enemy',
  SCOPEE: '2 Random Enemies',
  SCOPEF: '3 Random Enemies',
  SCOPEG: '4 Random Enemies',
  SCOPEH: '1 Ally',
  SCOPEI: 'All Allies',
  SCOPEJ: '1 Ally (Dead)',
  SCOPEL: 'All Allies (Dead)',
  SCOPEM: 'The User',
  DAMAGE: 'Damage Type',
  DAMAGEA: 'None',
  DAMAGEB: 'HP Damage',
  DAMAGEC: 'MP Damage',
  DAMAGED: 'HP Recover',
  DAMAGEE: 'MP Recover',
  DAMAGEF: 'HP Drain',
  DAMAGEG: 'MP Drain',
  ANIID: 'Animation ID',
  ANIIDB: 'Cast Animation ID',
  REF: 'Reference',
  REFA: 'Open',
  REFB: 'Close',
};

var translationsIT= {
  HEADER: 'Editor de Sequência de Ações',
  SUBHEAD: 'Faça sua Sequência aqui',
  HEADING: 'Una storia di potenza marittima: gli Inizi Navali',
  SUBHEADING: 'La storiografia marittima è molto più di una sequenza di battaglie. È la storia stessa del mare.',
  BUTTON_LANG_IT: 'Português',
  BUTTON_LANG_EN: 'English',
  DROP_CAP: 'L',
  EDITOR: 'Editor de Sequências',
  RESIZE : 'Arraste, Redimensione, Encaixe!',
  TEMA : 'Tema:',
  SCREEN : 'Editor Fullscreen',
  POSITION: 'Resetar Posição',
  CLEAR: 'Limpar Conteúdo',
  DISABLE: 'Desativar Auto Repetição',
  VIEW: 'Pré Visualizar',
  OPENVIEW: 'Abrir Visualização',
  CLOSEVIEW: 'Fechar Visualização',
  BGMA: 'Volume do Efeito de Fundo',
  BGMB: 'Volume do Efeitos Sonoros',
  BGMC: 'Volume do Efeito de Musica',
  BGMD: 'Volume do Som de Fundo',
  SKILLS: 'Habilidades',
  SCOPE: 'Escopo',
  SCOPEA: 'Ninguém',
  SCOPEB: '1 Inimigo',
  SCOPEC: 'Todos os Inimigos',
  SCOPED: '1 Inimigo Aleatório',
  SCOPEE: '2 Inimigos Aleatórios',
  SCOPEF: '3 Inimigos Aleatórios',
  SCOPEG: '4 Inimigos Aleatórios',
  SCOPEH: '1 Aliado',
  SCOPEI: 'Todos os Aliados',
  SCOPEJ: '1 Aliado (Morto)',
  SCOPEL: 'Todos os Aliados (Mortos)',
  SCOPEM: 'O Usuário',
  DAMAGE: 'Tipo de Dano',
  DAMAGEA: 'Nenhum',
  DAMAGEB: 'Dano no HP',
  DAMAGEC: 'Dano no MP',
  DAMAGED: 'Recuperação de HP',
  DAMAGEE: 'Recuperação de MP',
  DAMAGEF: 'Drenar HP',
  DAMAGEG: 'Drenar MP',
  ANIID: 'ID da Animação',
  ANIIDB: 'ID da Animação de Conjuração',
  REF: 'Referencias',
  REFA: 'Abrir',
  REFB: 'Fechar',
};

var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
  // add translation tables
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('it', translationsIT);
  $translateProvider.preferredLanguage('it');
  $translateProvider.fallbackLanguage('it');
}]);

app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);