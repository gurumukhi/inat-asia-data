import requests
import time

state_map = {
    "Andhra Pradesh":{"place_id":6810},
    "Arunachal Pradesh":{"place_id":10787},
    "Assam":{"place_id":7453},
    "Bihar":{"place_id":6894},
    "Chhattisgarh":{"place_id":7480},
    "Goa":{"place_id":10791},
    "Gujarat":{"place_id":6682},
    "Haryana":{"place_id":10797},
    "Himachal Pradesh":{"place_id":9248},
    "Jharkhand":{"place_id":7066},
    "Karnataka":{"place_id":7043},
    "Kerala":{"place_id":9627},
    "MadhyaPradesh":{"place_id":7745},
    "Maharashtra":{"place_id":6683},
    "Manipur":{"place_id":7461},
    "Meghalaya":{"place_id":7471},
    "Mizoram":{"place_id":10792},
    "Nagaland":{"place_id":7460},
    "Odisha":{"place_id":8907},
    "Punjab":{"place_id":7069},
    "Rajasthan":{"place_id":7215},
    "Sikkim":{"place_id":7454},
    "Tamil Nadu":{"place_id":6842},
    "Telangana":{"place_id":96902},
    "Tripura":{"place_id":8214},
    "Uttar Pradesh":{"place_id":7468},
    "Uttarakhand":{"place_id":96903},
    "West_Bengal":{"place_id":7158},
    "Andaman & Nicobar": {"place_id":"nelat=13.674228&nelng=93.94766589999999&subview=map&swlat=6.755749&swlng=92.20777989999999"},
    "Chandigarh":{"place_id":10788},
    "Dadra_Diu_Daman":{"place_id":"nelat=20.7714368&nelng=73.218192&swlat=20.0470181&swlng=70.87078799999999"},
    "Delhi":{"place_id":7776},
    "Jammu & Kashmir":{"place_id":9640},
    "Ladakh":{"place_id":32209},
    "Lakshadeep":{"place_id":10800},
    "Puducherry":{"place_id":13066}
}




for statename,details in state_map.items():
  print(statename, details)


#years_list = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022","2023"]
date_list = ["2024-04-26"]
inat_api_url= "https://api.inaturalist.org/v2/observations?observed_on=DATE&page=1&per_page=1&"

for statename,details in state_map.items():
  if isinstance(details['place_id'], int):
    tmp_url = inat_api_url + "place_id=" + str(details['place_id'])
  else:
    tmp_url = inat_api_url + str(details['place_id'])
  for each_date in date_list:
    final_api_url = tmp_url.replace("DATE",each_date)
    #print(final_api_url)
    obs_count = requests.get(final_api_url).json()["total_results"]
    state_map[statename][each_date]=obs_count
    time.sleep(1)
print(state_map)

