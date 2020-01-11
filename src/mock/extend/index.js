import Mock from 'mockjs'
import UserInfo from '../data/UserInfo'
import JsonWebTokenUtils from '../../utils/JsonWebTokenUtils'

const Random = Mock.Random

Random.extend({
  token() {
    return JsonWebTokenUtils.sign({"account":UserInfo.account});
  },
})