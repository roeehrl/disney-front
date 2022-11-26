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
      path: 'Sites',
      pageTitle: 'crm.sites',
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
      ]
    },
  },
  components: {
    Crud,
  },
  i18n: {
    messages: {
      en: {
        detailsTitle: 'Site',
        fields: {
          id: 'Id',
          name: 'Name',
        },
      },
      ar: {
        detailsTitle: 'Site',
        fields: {
          id: 'Id',
          name: 'Name',
        },
      },
    },
  },
}

</script>
