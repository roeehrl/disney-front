<template>
  <crud
    :prefix="prefix"
    :path="path"
    :page-title="pageTitle"
    :fields-info="fieldsInfo"
    :details-title="$t('detailsTitle')"
  >
  </crud>
</template>

<script>
import Crud from '@/utils/crud/components/Crud.vue'

export default {
  data () {
    return {
      prefix: 'api',
      path: 'Countries',
      pageTitle: 'crm.countries',
    }
  },
  computed: {
    fieldsInfo () {
      return [
        {
          text: this.$t('fields.id'),
          name: 'id',
          details: true,
        },
        {
          column: 'name',
          text: this.$t('fields.name'),
          name: 'name',
          multiedit: false,
        },
        {
          column: 'arName',
          text: this.$t('fields.arName'),
          name: 'arName',
          multiedit: false,
        },
        {
          column: 'callCode',
          text: this.$t('fields.callCode'),
          name: 'callCode',
          multiedit: false,
        },
        {
          column: 'nationCode',
          text: this.$t('fields.nationCode'),
          name: 'nationCode',
          multiedit: false,
        },
      ]
    },
  },
  components: {
    Crud,
  },
  i18n: {
    messages: {
      en: {
        detailsTitle: 'Countries',
        fields: {
          id: 'Id',
          name: 'Name',
          arName:'Name (Arabic)',
          callCode:'Dial Prefix',
          countryCode:'Country Code',

        },
      },
      ar: {
        detailsTitle: 'البلدان',
        fields: {
          id: 'رقم',
          name: 'الاسم (انجليزي)',
          arName:'الاسم',
          callCode:'كود الاتصال',
          countryCode:'الاسم المختصر',
        },
      },
    },
  },
}

</script>
