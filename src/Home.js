import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import BarGraph from './BarGraph';
import Svg, {Path} from 'react-native-svg';
import HalfDonutChart from './HollowChart';
import {ScrollView} from 'react-native-gesture-handler';
import CustomCalendar from './Calander';
import Card1 from './Card1';
import Card2 from './Card2';
import SvgComponent from './ContactUs';

const Home = () => {
  const [selectedButton, setSelectedButton] = useState('3m');

  const handleButtonClick = value => {
    setSelectedButton(value);
  };

  const data = [
    {label: 'Jan', value: 10},
    {label: 'Feb', value: 25},
    {label: 'Mar', value: 15},
    {label: 'June', value: 30},
    {label: 'May', value: 20},
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <ScrollView>
        <View
          style={{
            marginHorizontal: '10%',
            backgroundColor: '#FFF',
            padding: 10,
            marginTop: '5%',
            borderRadius: 10,
            elevation: 3,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15, color: '#052027', fontWeight: 'bold'}}>
              Stats
            </Text>
            <DetailSvg />
          </View>
          <View style={{marginLeft: '12%'}}>
            <BarGraph data={data} />
          </View>
          <View style={{alignItems: 'center', marginTop: '5%'}}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#1A1A1A'}}>
              Net Revenue
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: '5%',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: selectedButton === '3m' ? '#FFF' : '#FBDEB5',
                  padding: 10,
                  borderRadius: 10,
                  elevation: 3,
                }}
                onPress={() => handleButtonClick('3m')}>
                <Text
                  style={{
                    fontSize: 15,
                    color: selectedButton === '3m' ? '#F36821' : '#000',
                    fontWeight: 'bold',
                  }}>
                  3m
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: selectedButton === '6m' ? '#FFF' : '#FBDEB5',
                  padding: 10,
                  borderRadius: 10,
                  marginLeft: '5%',
                  elevation: 3,
                }}
                onPress={() => handleButtonClick('6m')}>
                <Text
                  style={{
                    fontSize: 15,
                    color: selectedButton === '6m' ? '#F36821' : '#000',
                    fontWeight: 'bold',
                  }}>
                  6m
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    selectedButton === '1yr' ? '#FFF' : '#FBDEB5',
                  padding: 10,
                  borderRadius: 10,
                  marginLeft: '5%',
                  elevation: 3,
                }}
                onPress={() => handleButtonClick('1yr')}>
                <Text
                  style={{
                    fontSize: 15,
                    color: selectedButton === '1yr' ? '#F36821' : '#000',
                    fontWeight: 'bold',
                  }}>
                  1 yr
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    selectedButton === '2yr' ? '#FFF' : '#FBDEB5',
                  padding: 10,
                  borderRadius: 10,
                  marginLeft: '5%',
                  elevation: 3,
                }}
                onPress={() => handleButtonClick('2yr')}>
                <Text
                  style={{
                    fontSize: 15,
                    color: selectedButton === '2yr' ? '#F36821' : '#000',
                    fontWeight: 'bold',
                  }}>
                  2 yrs
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    selectedButton === 'max' ? '#FFF' : '#FBDEB5',
                  padding: 10,
                  borderRadius: 10,
                  marginLeft: '5%',
                  elevation: 3,
                }}
                onPress={() => handleButtonClick('max')}>
                <Text
                  style={{
                    fontSize: 15,
                    color: selectedButton === 'max' ? '#F36821' : '#000',
                    fontWeight: 'bold',
                  }}>
                  Max
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{marginLeft: '5%', marginTop: '5%'}}>
              <HalfDonutChart value1={20} value2={80} />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#1A1A1A',
                  marginLeft: '15%',
                }}>
                Occupency
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#F5B42B'}}>
                7,334
              </Text>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#1A1A1A'}}>
                Avg Room Rate
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: '10%',
            marginTop: '5%',
            backgroundColor: '#FFF',
            elevation: 3,
            padding: 10,
            borderRadius: 10,
            marginBottom: '5%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15, color: '#052027', fontWeight: 'bold'}}>
              Bookings
            </Text>
            <DetailSvg />
          </View>
          <View>
            <CustomCalendar />
          </View>
        </View>
        <View style={{flex: 1, marginHorizontal: '10%'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#000000'}}>
            Discover
          </Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{paddingHorizontal: 10}}>
            <Card1 />
            <Card2 />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
function DetailSvg(props) {
  return (
    <Svg
      width={60}
      height={20}
      viewBox="0 0 55 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.201 2.598l2.942.006c1.166 0 2.168.41 3.005 1.242.832.826 1.254 1.81 1.254 2.959 0 1.142-.422 2.127-1.254 2.953C6.311 10.59 5.308 11 4.143 11H1.2V2.598zm2.942 1.207H2.52v6h1.623c.814 0 1.505-.293 2.074-.873.574-.58.855-1.29.855-2.127 0-.844-.281-1.553-.855-2.133a2.792 2.792 0 00-2.074-.867zm11.091 4.734H10.73c.064.41.263.762.603 1.055.34.299.738.445 1.201.445.34 0 .65-.076.944-.228.293-.153.498-.3.615-.446l.181-.222.78.779c-.024.035-.059.076-.106.135a2.576 2.576 0 01-.316.287 3.467 3.467 0 01-.51.357c-.176.106-.41.2-.697.287a3.032 3.032 0 01-.89.13c-.815 0-1.518-.3-2.11-.897a2.964 2.964 0 01-.89-2.162c0-.809.292-1.5.866-2.075.575-.574 1.266-.867 2.075-.867.808 0 1.476.27 2.015.809.54.539.809 1.207.809 2.015l-.065.598zM12.47 6.143c-.434 0-.797.128-1.09.386a1.931 1.931 0 00-.598.99h3.334a1.652 1.652 0 00-.545-.99c-.293-.258-.656-.386-1.101-.386zm4.863-1.623V3.318h1.078V5.24h1.201v1.078h-1.2v2.989c0 .216.064.392.204.527.135.14.305.205.51.205.094 0 .188-.006.287-.03.1-.017.176-.04.229-.064l.088-.023V11c-.235.082-.516.117-.844.117-1.12 0-1.676-.598-1.67-1.799v-3H16.13V5.24h.603c.399 0 .598-.24.598-.72zM25.547 11l-1.201.006v-.598a.76.76 0 00-.082.076c-.035.036-.112.088-.223.17a2.422 2.422 0 01-.357.217 2.56 2.56 0 01-1.078.252c-.586 0-1.073-.17-1.46-.51-.386-.34-.58-.732-.58-1.166 0-.474.147-.873.446-1.195.299-.316.709-.522 1.23-.61l2.104-.363c0-.304-.117-.556-.34-.767-.223-.205-.51-.31-.861-.31-.305 0-.586.064-.832.193-.247.128-.416.251-.51.38l-.159.205-.779-.779c.024-.03.053-.07.094-.117s.135-.135.275-.258c.141-.123.293-.234.457-.334.159-.094.37-.181.633-.258.264-.076.54-.117.82-.117.704 0 1.278.211 1.729.627.445.416.674.926.674 1.535V11zm-2.76-.955c.486 0 .867-.147 1.143-.44.275-.293.416-.703.416-1.242v-.117l-1.864.299a.875.875 0 00-.521.264.689.689 0 00-.2.51c0 .193.089.363.276.51.188.14.434.216.75.216zm5.701-4.805V11h-1.2V5.24h1.2zm.123-1.799a.697.697 0 01-.72.721.676.676 0 01-.516-.205.676.676 0 01-.205-.516c0-.205.064-.375.205-.51a.676.676 0 01.516-.204c.205 0 .375.064.515.205a.693.693 0 01.205.51zm2.936-.843V11h-1.195V2.598h1.195zm5.46 3.304l-.784.78c-.03-.03-.076-.07-.135-.13-.059-.058-.188-.128-.375-.216a1.345 1.345 0 00-.569-.135c-.257 0-.462.065-.615.182a.51.51 0 00-.006.838c.141.117.323.199.545.258.217.058.452.134.704.222.251.088.486.188.709.293.222.111.404.281.55.504.14.229.217.504.217.82 0 .498-.205.92-.603 1.272-.399.351-.92.527-1.56.527-.28 0-.55-.035-.808-.105a2.444 2.444 0 01-.627-.252 3.28 3.28 0 01-.433-.293c-.123-.1-.211-.188-.264-.258l-.088-.111.78-.78c.035.059.093.123.17.205.076.082.24.194.492.323s.51.193.779.193c.316 0 .557-.064.72-.193a.646.646 0 00.24-.528.52.52 0 00-.216-.416 1.569 1.569 0 00-.545-.257 9.576 9.576 0 01-.709-.223 7.145 7.145 0 01-.709-.293 1.284 1.284 0 01-.545-.504c-.146-.229-.217-.504-.217-.826 0-.44.194-.832.58-1.172.387-.34.874-.51 1.46-.51.228 0 .45.03.667.082.217.053.393.117.534.194.135.076.252.152.357.234.106.082.182.14.229.187l.076.088zM43 6.5a.5.5 0 000 1v-1zm11.354.854a.5.5 0 000-.708l-3.182-3.182a.5.5 0 10-.707.708L53.293 7l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM43 7.5h11v-1H43v1z"
        fill="#F36821"
      />
    </Svg>
  );
}
