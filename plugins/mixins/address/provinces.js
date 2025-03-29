import abccitiesMixins from '~/plugins/mixins/address/abccities'
import dtolcitiesMixins from '~/plugins/mixins/address/dtolcities'
import mtopcitiesMixins from '~/plugins/mixins/address/mtopcities'
import qtozcitiesMixins from '~/plugins/mixins/address/qtozcities'
export default {
  mixins: [
    abccitiesMixins,
    dtolcitiesMixins,
    mtopcitiesMixins,
    qtozcitiesMixins
  ],
  computed: {
    provinces () {
      return [
        {
          province: 'ABRA',
          cities: this.abra_cities
        },
        {
          province: 'AGUSAN DEL NORTE',
          cities: this.agusan_del_norte_cities
        },
        {
          province: 'AGUSAN DEL SUR',
          cities: this.agusan_del_sur_cities
        },
        {
          province: 'AKLAN',
          cities: this.aklan_cities
        },
        {
          province: 'ALBAY',
          cities: this.albay_cities
        },
        {
          province: 'ANTIQUE',
          cities: this.antique_cities
        },
        {
          province: 'APAYAO',
          cities: this.apayao_cities
        },
        {
          province: 'AURORA',
          cities: this.aurora_cities
        },
        {
          province: 'BASILAN',
          cities: this.basilan_cities
        },
        {
          province: 'BATAAN',
          cities: this.bataan_cities
        },
        {
          province: 'BATANES',
          cities: this.batanes_cities
        },
        {
          province: 'BATANGAS',
          cities: this.batangas_cities
        },
        {
          province: 'BENGUET',
          cities: this.benguet_cities
        },
        {
          province: 'BILIRAN',
          cities: this.biliran_cities
        },
        {
          province: 'BOHOL',
          cities: this.bohol_cities
        },
        {
          province: 'BUKIDNON',
          cities: this.bukidnon_cities
        },
        {
          province: 'BULACAN',
          cities: this.bulacan_cities
        },
        {
          province: 'CAGAYAN',
          cities: this.cagayan_cities
        },
        {
          province: 'CAMARINES NORTE',
          cities: this.camarines_norte_cities
        },
        {
          province: 'CAMARINES SUR',
          cities: this.camarines_sur_cities
        },
        {
          province: 'CAMIGUIN',
          cities: this.camiguin_cities
        },
        {
          province: 'CAPIZ',
          cities: this.capiz_cities
        },
        {
          province: 'CATANDUANES',
          cities: this.catanduanes_cities
        },
        {
          province: 'CAVITE',
          cities: this.cavite_cities
        },
        {
          province: 'CEBU',
          cities: this.cebu_cities
        },
        {
          province: 'COTABATO (NORTH COTABATO)',
          cities: this.cotabato_cities
        },
        {
          province: 'DAVAO DE ORO (COMPOSTELA VALLEY)',
          cities: this.davao_de_oro_cities
        },
        {
          province: 'DAVAO DEL NORTE',
          cities: this.davao_del_norte_cities
        },
        {
          province: 'DAVAO DEL SUR',
          cities: this.davao_del_sur_cities
        },
        {
          province: 'DAVAO OCCIDENTAL',
          cities: this.davao_occidental_cities
        },
        {
          province: 'DAVAO ORIENTAL',
          cities: this.davao_oriental_cities
        },
        {
          province: 'DINAGAT ISLANDS',
          cities: this.dinagat_islands_cities
        },
        {
          province: 'EASTERN SAMAR',
          cities: this.eastern_samar_cities
        },
        {
          province: 'GUIMARAS',
          cities: this.guimaras_cities
        },
        {
          province: 'IFUGAO',
          cities: this.ifugao_cities
        },
        {
          province: 'ILOCOS NORTE',
          cities: this.ilocos_norte_cities
        },
        {
          province: 'ILOCOS SUR',
          cities: this.ilocos_sur_cities
        },
        {
          province: 'ILOILO',
          cities: this.iloilo_cities
        },
        {
          province: 'ISABELA',
          cities: this.isabela_cities
        },
        {
          province: 'KALINGA',
          cities: this.kalinga_cities
        },
        {
          province: 'LA UNION',
          cities: this.la_union_cities
        },
        {
          province: 'LAGUNA',
          cities: this.laguna_cities
        },
        {
          province: 'LANAO DEL NORTE',
          cities: this.lanao_del_norte_cities
        },
        {
          province: 'LANAO DEL SUR',
          cities: this.lanao_del_sur_cities
        },
        {
          province: 'LEYTE',
          cities: this.leyte_cities
        },
        {
          province: 'MAGUINDANAO',
          cities: this.maguindanao_cities
        },
        {
          province: 'MARINDUQUE',
          cities: this.marinduque_cities
        },
        {
          province: 'MASBATE',
          cities: this.masbate_cities
        },
        {
          province: 'MISAMIS OCCIDENTAL',
          cities: this.misamis_ccidental_cities
        },
        {
          province: 'MISAMIS ORIENTAL',
          cities: this.misamis_oriental
        },
        {
          province: 'MOUNTAIN PROVINCE',
          cities: this.mountain_province_cities
        },
        {
          province: 'NCR, CITY OF MANILA, FIRST DISTRICT (Not a Province)',
          cities: this.ncr_manila_cities
        },
        {
          province: 'NCR, FOURTH DISTRICT (Not a Province)',
          cities: this.ncr_fourth_cities
        },
        {
          province: 'NCR, SECOND DISTRICT (Not a Province)',
          cities: this.ncr_second_cities
        },
        {
          province: 'NCR, THIRD DISTRICT (Not a Province)',
          cities: this.ncr_third_cities
        },
        {
          province: 'NEGROS OCCIDENTAL',
          cities: this.negros_occidental_cities
        },
        {
          province: 'NEGROS ORIENTAL',
          cities: this.negros_oriental_cities
        },
        {
          province: 'NORTHERN SAMAR',
          cities: this.northern_samar_cities
        },
        {
          province: 'NUEVA ECIJA',
          cities: this.nueva_ecija_cities
        },
        {
          province: 'NUEVA VIZCAYA',
          cities: this.nueva_vizcaya_cities
        },
        {
          province: 'OCCIDENTAL MINDORO',
          cities: this.occidental_mindoro_cities
        },
        {
          province: 'ORIENTAL MINDORO',
          cities: this.oriental_mindoro_cities
        },
        {
          province: 'PALAWAN',
          cities: this.palawan_cities
        },
        {
          province: 'PAMPANGA',
          cities: this.pampanga_cities
        },
        {
          province: 'PANGASINAN',
          cities: this.pangasinan_cities
        },
        {
          province: 'QUEZON',
          cities: this.quezon_cities
        },
        {
          province: 'QUIRINO',
          cities: this.quirino_cities
        },
        {
          province: 'RIZAL',
          cities: this.rizal_cities
        },
        {
          province: 'ROMBLON',
          cities: this.romblon_cities
        },
        {
          province: 'SAMAR (WESTERN SAMAR)',
          cities: this.samar_cities
        },
        {
          province: 'SARANGANI',
          cities: this.sarangani_cities
        },
        {
          province: 'SIQUIJOR',
          cities: this.siquijor_cities
        },
        {
          province: 'SORSOGON',
          cities: this.sorsogon_cities
        },
        {
          province: 'SOUTH COTABATO',
          cities: this.south_cotabato_cities
        },
        {
          province: 'SOUTHERN LEYTE',
          cities: this.southern_leyte_cities
        },
        {
          province: 'SULTAN KUDARAT',
          cities: this.sultan_kudarat_cities
        },
        {
          province: 'SULU',
          cities: this.sulo_cities
        },
        {
          province: 'SURIGAO DEL NORTE',
          cities: this.surigao_del_sur_cities
        },
        {
          province: 'SURIGAO DEL SUR',
          cities: this.surigao_del_sur_cities
        },
        {
          province: 'TARLAC',
          cities: this.tarlac_cities
        },
        {
          province: 'TAWI-TAWI',
          cities: this.tawi_tawi_cities
        },
        {
          province: 'ZAMBALES',
          cities: this.zambales_cities
        },
        {
          province: 'ZAMBOANGA DEL NORTE',
          cities: this.zamboanga_del_norte_cities
        },
        {
          province: 'ZAMBOANGA DEL SUR',
          cities: this.zamboanga_del_sur_cities
        },
        {
          province: 'ZAMBOANGA SIBUGAY',
          cities: this.zamboanga_sibugay_cities
        }
        ]
      }
    }
  }
