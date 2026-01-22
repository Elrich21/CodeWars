#include <vector>
#include<iostream>
using namespace std;

std::vector<unsigned int> removeSmallest(const std::vector<unsigned int>& numbers) {
  if(numbers.empty()==true)
    {
    return numbers;
  }
  vector<unsigned int> stor;
  for(int i=0;i<numbers.size();i++)
    {
    stor.push_back(numbers[i]);
  }
  
  int min=stor[0];
  int key=0;
  for(int i=1;i<stor.size();i++)
    {
    if(stor[i]<min)
      {
      min=stor[i];
      key=i;
    }
  }
  stor.erase(stor.begin()+key);
  return stor;
}
