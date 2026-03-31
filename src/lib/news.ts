export interface Story {
  id: string;
  headline: string;
  summary: string;
  content: string;
  source: string;
  sourceUrl: string;
  timestamp: string;
  category: 'breaking' | 'trial' | 'investigation' | 'cold-case' | 'missing-person';
  imageUrl?: string;
  author?: string;
}

export const mockStories: Story[] = [
  {
    id: '1',
    headline: 'FBI Announces Major Breakthrough in Decades-Old Cold Case',
    summary: 'Federal investigators have finally identified a suspect in the 1987 disappearance of a Colorado woman, thanks to advanced DNA technology and renewed witness testimony.',
    content: `After 37 years, the FBI has announced a significant breakthrough in one of Colorado's most baffling cold cases. The disappearance of Margaret "Maggie" Thornton, who vanished from her Denver home on March 15, 1987, has haunted investigators and her family for decades.

Using advanced DNA phenotyping technology not available at the time of her disappearance, investigators have identified a suspect: Raymond Cole, a former neighbor who died in state prison in 2019 while serving time for an unrelated assault conviction.

"This is the break we've been waiting for," said FBI Special Agent Diana Morales. "While Cole cannot be prosecuted, this identification brings long-overdue answers to Maggie's family."

The breakthrough came after the FBI's Cold Case Unit resubmitted trace evidence from Thornton's home to a state-of-the-art forensic laboratory. Genetic genealogy techniques led them to Cole's living relatives, who voluntarily provided DNA samples that confirmed a match.

Thornton's daughter, now 52, expressed mixed emotions about the news. "I'm grateful to finally know what happened to my mother," she said in a statement. "But it also brings back all the pain of losing her."

The case highlights the power of modern forensic technology in solving decades-old crimes and providing closure to families.`,source: 'Denver Post',
    sourceUrl: 'https://example.com/denver-post/fbi-breakthrough',
    timestamp: '2024-01-15T10:30:00Z',
    category: 'cold-case',
    author: 'Sarah Mitchell',
  },
  {
    id: '2',
    headline: 'High-Profile Murder Trial Begins with Dramatic Opening Statements',
    summary: 'The trial of tech executive James Mercer, accused of killing his wife, began today with prosecutors presenting a timeline of events and defense attorneys challenging evidence.',
    content: `One of the most anticipated murder trials in recent California history began Monday as James Mercer, former CEO of NexGen Technologies, faced a jury for the alleged murder of his wife, Elena Mercer.

Prosecutor Rachel Kim delivered a compelling opening statement, presenting a detailed timeline that placed Mercer at the scene of the crime. "The evidence will show that James Mercer had both the motive and the opportunity," Kim told jurors.

Defense attorney Michael Chen wasted no time in challenging the prosecution's case. "The state has built a theory on circumstantial evidence and speculation," Chen argued. "My client loved his wife and had absolutely nothing to do with her death."

The trial has drawn significant media attention due to Mercer's high profile in Silicon Valley and the mysterious circumstances surrounding Elena Mercer's death. The prosecution is expected to call over 30 witnesses, including forensic experts and former employees.

Court proceedings continue tomorrow with the first prosecution witnesses.`,source: 'San Francisco Chronicle',
    sourceUrl: 'https://example.com/sf-chronicle/mercer-trial',
    timestamp: '2024-01-15T14:00:00Z',
    category: 'trial',
    author: 'Robert Chang',
  },
  {
    id: '3',
    headline: 'Serial Killer Investigation Expands to Third State',
    summary: 'Authorities in Texas, Oklahoma, and now Arkansas are coordinating their investigations into what appears to be a serial killer targeting rural communities along Highway 75.',
    content: `Law enforcement agencies across three states have formed a joint task force to investigate a series of murders that investigators believe are connected. The latest development came as Arkansas authorities confirmed that a body found near Fayetteville matches the pattern seen in previous killings.

The victims, all women between the ages of 25 and 40, were found within five miles of Highway 75, a major interstate that runs from Dallas to the Canadian border.

"We believe we're dealing with a single perpetrator who is highly mobile and familiar with rural areas," said Texas Ranger Captain James Morrison. "The geographic spread suggests someone who travels for work or has connections across state lines."

Forensic evidence from all three crime scenes is being reanalyzed at the FBI's Quantico laboratory. Investigators are asking anyone with information to contact their local authorities or the FBI tip line.`,source: 'Texas Tribune',
    sourceUrl: 'https://example.com/texas-tribune/serial-investigation',
    timestamp: '2024-01-14T18:45:00Z',
    category: 'breaking',
    author: 'Marcus Williams',
  },
  {
    id: '4',
    headline: 'Missing Teen Found Safe After 72-Hour Search Operation',
    summary: 'A 16-year-old girl who disappeared from her suburban Chicago home has been found safe, bringing relief to the community that rallied to find her.',
    content: `Thousands of volunteers and law enforcement officers celebrated late Sunday night as 16-year-old Amanda Chen was located safe and unharmed in a wooded area three miles from her home in Naperville, Illinois.

The teen had been missing since Friday afternoon when she failed to return home from school. An extensive search operation involving over 500 volunteers, police drones, and K-9 units scoured the area for three days.

"We are incredibly grateful for this outcome," said Naperville Police Chief David Thompson. "The community response to Amanda's disappearance was overwhelming and demonstrates the power of people coming together."

Amanda was found by a volunteer search team around 10 PM Sunday. She was taken to a local hospital for evaluation and has since been reunited with her family. Authorities have not released details about the circumstances of her disappearance, citing the ongoing investigation.` ,source: 'Chicago Tribune',
    sourceUrl: 'https://example.com/chicago-tribune/missing-teen-found',
    timestamp: '2024-01-14T22:00:00Z',
    category: 'missing-person',
    author: 'Jennifer Lopez',
  },
  {
    id: '5',
    headline: 'Former Detective Testifies Against Corruption in Cold Case Unit',
    summary: 'A retired NYPD detective broke his silence, revealing systemic issues in how the department handled dozens of cold cases over two decades.',
    content: `In explosive testimony before a grand jury, retired NYPD Detective Marcus Hayes revealed what he describes as a culture of neglect and deliberate obsolescence in the department's Cold Case Unit.

"Cases were prioritized based on political pressure, not evidence," Hayes testified. "Poor families, minority communities, anyone without connections—their cases went to the bottom of the pile and stayed there."

Hayes worked in the Cold Case Unit for 15 years before retiring in 2022. His testimony is part of an ongoing investigation by the Manhattan District Attorney's Office into potential civil rights violations.

The NYPD has declined to comment on Hayes' specific allegations but released a brief statement: "The Department is committed to solving all cases regardless of the victim's background. Any claims to the contrary will be thoroughly investigated."

Civil rights advocates are calling for an independent audit of all cold cases handled during Hayes' tenure.`,source: 'New York Times',
    sourceUrl: 'https://example.com/nyt/detective-testimony',
    timestamp: '2024-01-13T16:30:00Z',
    category: 'investigation',
    author: 'Patricia Sullivan',
  },
  {
    id: '6',
    headline: 'Evidence Tampering Allegations Rock Prominent Murder Case',
    summary: 'Defense attorneys in the Martinez murder case have filed a motion to dismiss after discovering potential evidence manipulation by the lead investigator.',
    content: `The high-profile murder case against Daniel Martinez faces potential collapse after defense attorneys uncovered evidence suggesting that the lead detective may have manipulated crucial forensic evidence.

According to court filings, text messages recovered from Detective Paul Warren's department-issued phone show communications with a forensic technician discussing how to "clean up" DNA evidence that was inconclusive.

"This is exactly the kind of misconduct that leads to wrongful convictions," said defense attorney Karen White. "The state's case relies entirely on this compromised evidence."

Prosecutors have requested additional time to investigate the allegations. Judge Elena Rodriguez has scheduled an emergency hearing for next week to consider the defense's motion to dismiss.

Martinez has maintained his innocence since his arrest 18 months ago. The case has drawn attention due to Martinez's status as a prominent local businessman and community leader.`,source: 'Arizona Republic',
    sourceUrl: 'https://example.com/arizona-republic/evidence-tampering',
    timestamp: '2024-01-12T11:15:00Z',
    category: 'trial',
    author: 'Michael Torres',
  },
  {
    id: '7',
    headline: 'True Crime Podcast Leads to New Leads in 1995 Cold Case',
    summary: 'A popular podcast\'s investigation into the unsolved murder of a college student has generated over 200 tips, with investigators now pursuing "promising new leads."',
    content: `The viral success of the true crime podcast "Frozen Justice" has unexpectedly generated new momentum in a 29-year-old unsolved murder case.

Within days of releasing a three-part series on the death of University of Michigan student Jennifer Walsh, podcast producers received over 200 tips from listeners across the country.

"Two of these tips have been particularly valuable," said Ann Arbor Police Captain Susan Mitchell. "We're following up on information that we've never had before."

Walsh was found strangled in her off-campus apartment in April 1995. The case went cold within months, with investigators unable to identify any suspects. The podcast highlighted several inconsistencies in the original investigation and identified persons of interest who were never properly interviewed.

This case joins a growing list of cold cases being revitalized by true crime media, raising questions about the role of amateur investigators in criminal justice.` ,source: 'Detroit Free Press',
    sourceUrl: 'https://example.com/detroit-free-press/podcast-cold-case',
    timestamp: '2024-01-11T09:00:00Z',
    category: 'cold-case',
    author: 'Linda Chen',
  },  {
    id: '8',
    headline: 'Domestic Violence Survivor Shares Story After Attacker\'s Parole Denial',
    summary: 'Maria Santos, who survived a brutal attack by her ex-husband in 2019, finally speaks out after the parole board denied his release for the third time.',
    content: `For the first time since her ex-husband's conviction, Maria Santos is sharing her story publicly. Her attacker, convicted attempted murderer David Santos, was denied parole for the third time last week—a decision she says she fought hard for.

"I want other survivors to know that their voices matter," Santos said in an exclusive interview. "For five years, I've been attending these hearings, making sure the parole board understands what he did and the danger he still poses."

Maria Santos survived a brutal stabbing attack in 2019. Despite 23 stab wounds and months of hospitalization, she recovered and has since become an advocate for domestic violence survivors. Her testimony was instrumental in the original conviction and has been crucial in each parole hearing.

"Every time he comes up for parole, I'm there," Santos said. "He took so much from me. I won't let him take my voice too."

Domestic violence advocates say Santos's story highlights the importance of victim participation in the justice system.`,source: 'Miami Herald',
    sourceUrl: 'https://example.com/miami-herald/parole-denial',
    timestamp: '2024-01-10T15:45:00Z',
    category: 'investigation',
    author: 'Carmen Rivera',
  },
  {
    id: '9',
    headline: 'New Forensic Technique Cracks Urban Legend Murder Case',
    summary: 'Scientists using breakthrough gait analysis technology have finally identified the suspect in a 50-year-old murder that had become local folklore.',
    content: `A murder case that had become the stuff of local legend in rural Vermont has finally been solved, thanks to cutting-edge forensic gait analysis technology.

Vermont State Police announced today that 78-year-old Harold Dickinson, now in hospice care, has confessed to the 1974 murder of teenage runaway Lisa Monroe after being confronted with the new evidence.

"For 50 years, people in this town whispered about the 'Ghost of Cobb's Hill,'" said State Police Lieutenant Robert Greene. "With this new technology, we were able to match distinctive walking patterns captured in security footage from a distant location to the killer's movement at the crime scene."

The technology, developed at MIT, analyzes subtle differences in human gait that are as unique as fingerprints. While Dickinson was not physically present at the crime scene, evidence placed him in the area, and gait analysis from another crime matched his unique walk.

Monroe's remains were found in 1975, but the case went cold. Now, with Dickinson's confession, investigators hope to locate other victims he may have targeted.`,source: 'Burlington Free Press',
    sourceUrl: 'https://example.com/burlington/gait-analysis',
    timestamp: '2024-01-09T13:20:00Z',
    category: 'cold-case',
    author: 'Thomas Hardy',
  },
  {
    id: '10',
    headline: 'Breaking: Multiple Arrests in Major Human Trafficking Ring Takedown',
    summary: 'Federal authorities announced charges against 23 individuals across six states in what they describe as one of the largest human trafficking network busts in recent history.',
    content: `A coordinated federal operation spanning six states has resulted in 23 arrests and the rescue of 47 victims of human trafficking, the Department of Justice announced this morning.

The operation, codenamed "Northern Cross," targeted a network operating primarily in the Midwest and Pacific Northwest. Victims, ranging from 14 to 52 years old, were being exploited for both labor and sex trafficking.

"This network operated with sophistication and brutality," said U.S. Attorney General Dana Mitchell. "Today's arrests have dealt a significant blow to a criminal enterprise that preyed on vulnerable individuals."

Charges include conspiracy, forced labor, sex trafficking of minors, and money laundering. The investigation began in 2021 after a routine traffic stop in Ohio led investigators to uncover evidence of a much larger operation.

"We followed the threads for three years," explained FBI Special Agent in Charge Marcus Reynolds. "This network was highly organized, with cells in multiple states."Prosecutors expect this to be one of the largest human trafficking prosecutions in U.S. history.`,source: 'Associated Press',
    sourceUrl: 'https://example.com/ap/trafficking-bust',
    timestamp: '2024-01-08T08:00:00Z',
    category: 'breaking',
    author: 'Associated Press',
  },
];

export function getTopStory(): Story {
  return mockStories[0];
}

export function getStoryById(id: string): Story | undefined {
  return mockStories.find(story => story.id === id);
}

export function getAllStories(): Story[] {
  return mockStories;
}

export function getStoriesByCategory(category: Story['category']): Story[] {
  return mockStories.filter(story => story.category === category);
}