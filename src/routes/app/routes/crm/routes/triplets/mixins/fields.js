export default {
  computed: {
    fieldsInfo () {
      return [
        {
          text: this.$t('fields.id'),
          name: 'id',
          details: false,
        },
        {
          type: 'select',
          url: 'api/Persons',
          list: {
            value: 'id',
            text: 'firstName',
            data: [],
          },
          column: 'person',
          text: this.$t('fields.person'),
          name: 'person',
          apiObject: {
            name: 'person.firstName',
          },
        },
        {
          type: 'input',
          column: 'pstn',
          text: this.$t('fields.pstn'),
          name: 'pstn',
          required: false,
        },
        {
          type: 'input',
          column: 'imei',
          text: this.$t('fields.imei'),
          name: 'imei',
          multiedit: false,
          required: false,
        },
        {
          type: 'input',
          column: 'imsi',
          text: this.$t('fields.imsi'),
          name: 'imsi',
          multiedit: false,
          required: false,
        },
        {
          type: 'input',
          column: 'description',
          text: this.$t('fields.description'),
          name: 'description',
          multiedit: false,
          required: false,
        },
        {
          type: 'input',
          column: 'arDescription',
          text: this.$t('fields.arDescription'),
          name: 'arDescription',
          multiedit: false,
          required: false,
        },
      ]
    },
  },
}
